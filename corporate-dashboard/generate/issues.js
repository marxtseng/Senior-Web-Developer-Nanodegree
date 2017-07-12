var fs = require('fs');

var customers = ['Marx', 'Ytin', 'Bill', 'Kevin', 'Zoe'];
var employees = ['Oliver', 'Penny', 'Edward', 'Adam', 'Ann'];
var data = [
    [],
    [],
    [],
    []
];
data.forEach(function(d) {
    for (var i = 1; i <= 20; i++) {
        var timestamp = 1451577600000 + Math.floor(Math.random() * (1474819200000 - 1451577600000));
        var customer = customers[Math.floor(Math.random() * customers.length)];
        var status = Math.random() < 0.5 ? 'Close' : 'Open';

        d.push({
            id: i,
            customer: customer,
            customer_email: [customer, '@gmail.com'].join('').toLowerCase(),
            employee: employees[Math.floor(Math.random() * employees.length)],
            submission_timestamp: timestamp,
            closed_timestamp: status === 'Close' ? timestamp + Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000) : '',
            description: ['Issues ', i].join(''),
            status: status
        });
    }
});

data.forEach(function(d, idx) {
    var stream = fs.createWriteStream(['issues_', idx, '.json'].join(''));
    stream.once('open', function(fd) {
        stream.write(JSON.stringify(d));
        stream.end();
    });
});

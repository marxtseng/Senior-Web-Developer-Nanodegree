var fs = require('fs');

var customer = ['Marx', 'Ytin', 'Bill', 'Kevin', 'Zoe'];
var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var data = [];

for (var i = 0; i < 5; i++) {
    var lineData = [
        ['Customer'].concat(customer)
    ];
    month.forEach(function(m) {
        var item = [m];
        customer.forEach(function(c) {
            item.push(Math.ceil(Math.random() * 10));
        });
        lineData.push(item);
    });
    var barData = [
            ['Moth', 'Issues']
        ],
        total_issues = 0;
    lineData.forEach(function(m, i) {
        var issues = 0;
        if (i > 0) {
            m.forEach(function(c, j) {
                if (j > 0)
                    issues += c;
            });

            barData.push([m[0], issues]);
            total_issues += issues;
        }
    });

    data.push({ issues: total_issues, lineData: lineData, barData: barData })
}

data.forEach(function(d, idx) {
    var stream = fs.createWriteStream(['metrics_', idx, '.json'].join(''));
    stream.once('open', function(fd) {
        stream.write(JSON.stringify(d));
        stream.end();
    });
});

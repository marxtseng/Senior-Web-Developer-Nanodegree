var fs = require('fs');
var data = [];

for (var i = 0; i < 5; i++) {
    var county = ['New Taipei City', 'Taipei City', 'Taoyuan City', 'Taichung City', 'Tainan City', 'Kaohsiung City', 'Hsinchu City', 'Keelung City', 'Chiayi City'];
    var temp = [
        ['City', 'Employees'].join(',')
    ];
    county.forEach(function(item) {
        temp.push([item, Math.ceil(Math.random() * 300)].join(','));
    });
    data.push(temp.join('\n'));
}

data.forEach(function(d, idx) {
    var stream = fs.createWriteStream(['geo_', idx, '.csv'].join(''));
    stream.once('open', function(fd) {
        stream.write(d);
        stream.end();
    });
});

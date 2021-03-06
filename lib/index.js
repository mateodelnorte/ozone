var date = require('./date'),
    debug = require('debug')('ozone'),
    request = require('request'),
    util = require('util'),
    $ = require('cheerio');

function Ozone () {
  this.url = 'http://airquality.weather.gov/probe_aq_data.php'
}

Ozone.prototype.get = function (latitude, longitude, callback) {
  var url = this.url + '?latitude=' + latitude + '&longitude=' + longitude;

  debug('get ' + url);

  var options = {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  };

  request.get(options, function (err, res, data) {
    if (err) { 
      return callback(err);
    } else {

      var table = $('table', data)[6]

      var rows = $('tr', table);

      var i, data = { data: [] }, now = new Date();

      for (i = 1; i < rows.length; i++) {

        var tds = $('td center', rows[i]);

        var time = $(tds[0]).text().toString().replace('   ', ' ').replace('  ', ' ').split(' ');

        var formattedYear = time[2] + '/' + time[1] + '/' + now.getFullYear() + ' ' + time[3] + time[4];

        var oneHourAverage = $(tds[1]).text();

        var eightHourAverage = $(tds[2]).text();

        data.data.push({
          ozoneEndingTime: date.getDateFromFormat(formattedYear, 'MMM/dd/yyyy hha'),
          oneHourAverage: oneHourAverage,
          eightHourAverage: eightHourAverage
        });

      }

      callback(null, res, data);

    }
  });
}

module.exports = Ozone;
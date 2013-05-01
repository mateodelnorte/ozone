ozone
=====

ozone is a simple wrapper around the NOAA national weather service's publicly exposed ozone levels. It parses the values from http://airquality.weather.gov/probe_aq_data.php and returns them in json form.

How to use it: 

Require forecast.io

```
var Ozone = require('ozone');
var ozone = new Ozone();
```

Make a call to the API using the get method. 

```
ozone.get(latitude, longitude, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```
  Data is returned in an object with a data property, which is an array of objects each containing time, an eight hour average, and a one hour average. All ozone levels are marked in parts per billion. 
  
```
{ data:
   [ { ozoneEndingTime: 1367429412000,
       oneHourAverage: '55',
       eightHourAverage: '44' },
     { ozoneEndingTime: 1367433012000,
       oneHourAverage: '59',
       eightHourAverage: '47' },
     { ozoneEndingTime: 1367436612000,
       oneHourAverage: '64',
       eightHourAverage: '51' },
     { ozoneEndingTime: 1367440212000,
       oneHourAverage: '68',
       eightHourAverage: '55' },
     { ozoneEndingTime: 1367443812000,
       oneHourAverage: '72',
       eightHourAverage: '59' },
     { ozoneEndingTime: 1367447412000,
       oneHourAverage: '76',
       eightHourAverage: '62' },
     { ozoneEndingTime: 1367451012000,
       oneHourAverage: '77',
       eightHourAverage: '66' },
     { ozoneEndingTime: 1367454612000,
       oneHourAverage: '68',
       eightHourAverage: '68' },
     { ozoneEndingTime: 1367458212000,
       oneHourAverage: '57',
       eightHourAverage: '68' },
     { ozoneEndingTime: 1367461812000,
       oneHourAverage:
       ...
```

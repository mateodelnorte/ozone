ozone
=====

ozone is a simple wrapper around the NOAA national weather service's publicly exposed ozone levels. It parses the values from http://airquality.weather.gov/probe_aq_data.php and returns them in json form.

How to use it: 

1. Require forecast.io

```
var Ozone = require('ozone');
```

2. Instantiate an instance of Forecast. You'll need to provide options specifying your forecast.io API Key. 

```
var ozone = new Ozone();
```

3. Make a call to the API using the get or getAtTime methods. 

  The get function calls to the https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE endpoint. 

```
ozone.get(latitude, longitude, function (err, res, data) {
  if (err) throw err;
  log('res: ' + util.inspect(res));
  log('data: ' + util.inspect(data));
});
```

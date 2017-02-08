'use strict';

var log = require('debug')('ozone'),
    sinon = require('sinon'),
    util = require('util');

var should = require('should');

var Ozone = require('../lib/index');

var ozone = new Ozone(),
    latitude = 37.378888,
    longitude = -121.076202;

describe('ozone', function () {
  describe('#get', function () {
    it('should return data for a latitude and longitude', function (done) {
      ozone.get(latitude, longitude, function (err, res, data) {
        if (err) throw err;
        res.should.not.equal.null;
        data.should.not.equal.null;
        data.data[0].should.have.property('ozoneEndingTime');
        data.data[0].should.have.property('oneHourAverage');
        data.data[0].should.have.property('eightHourAverage');
        done();
      });
    });
  });
});
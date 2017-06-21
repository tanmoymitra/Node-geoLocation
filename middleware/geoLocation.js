const getIP = require('external-ip')();
const where = require('node-where');
const store = require('store');

exports.geolocation = function(req, res, next){
    /* 
        Cheking if the geo location data is available in Local Storage
        If Geo Location data is available then not to check the service, just get data from Local Storage
    */
    if(store.get('geoData') == null && store.get('geoIp') == null){
        getIP(function (err, ip) {
            if (err) { throw err; }
            where.is(ip, function(err, result) {
                req.geoip = ip;
                req.geoLoc = result.attributes;
                store.set('geoData', result.attributes);
                store.set('geoIp', {IP: ip});
                next();
            });
        });
    } else {
        console.log("Get Data from Local Storage");
        req.geoLoc = store.get('geoData');
        req.geoip = store.get('geoIp').IP;
        next();
    }
};
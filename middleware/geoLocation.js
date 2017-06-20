const getIP = require('external-ip')();
const where = require('node-where');

exports.geolocation = function(req, res, next){
    console.log("geolocation");
    getIP(function (err, ip) {
        if (err) { throw err;}
        where.is(ip, function(err, result) {
            console.log(JSON.stringify(result.attributes));
            req.geoip = ip;
            req.geoLoc = result.attributes;
            next();
        });
    });
};
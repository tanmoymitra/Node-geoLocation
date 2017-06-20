exports.index = function(req, res){
  res.render('index', { 
    title: 'React + Express + GeoLocation',
    ip: req.geoip,
    countryCode: req.geoLoc['countryCode'],
    country: req.geoLoc['country'],
    state: req.geoLoc['region'],
    city: req.geoLoc['city'],
    zip: req.geoLoc['postalCode'],
    lat: req.geoLoc['lat'],
    lng: req.geoLoc['lng'],
    foo: {bar:'baz'} });
};
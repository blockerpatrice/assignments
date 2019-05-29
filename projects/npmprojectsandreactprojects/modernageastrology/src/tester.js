var sdkClient = require('./Sdk');

// make some dummy data in order to call vedic rishi api
var data = {
    'date': 10,
    'month': 12,
    'year': 1993,
    'hour': 1,
    'minute': 25,
    'latitude': 27,
    'longitude': -82,
    'timezone': -10
};

// api name which is to be called
var resource = "astro_details";

// call horoscope apis


sdkClient.call(resource, data.date, data.month, data.year, data.hour, data.minute, data.latitude, data.longitude, data.timezone, function(error, result){

    if(error)
    {
        console.log("Error returned!!");
    }
    else
    {
        console.log('Response has arrived from API server --');
        console.log(result);
    }
});
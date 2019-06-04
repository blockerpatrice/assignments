var sdkClient = require('./Sdk');

// make some dummy data in order to call vedic rishi api
var data = {
    'date': 29,
    'month': 1,
    'year': 1994,
    'hour': 19,
    'minute': 17,
    'latitude': -82,
    'longitude': 27,
    'timezone': -5
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
        console.log(result.ascendant);
    }
});
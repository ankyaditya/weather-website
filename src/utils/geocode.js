const request = require('request')

const geocode = (address, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYW5reWFkaXR5YSIsImEiOiJjazc3dDQ0bDcwYmliM2VwYzdodTk1NGdlIn0.DNHHgVrv2rJ603Wzqnjg-g&limit=1'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURI(address)+'.json?access_token=pk.eyJ1IjoiYW5reWFkaXR5YSIsImEiOiJjazc3dDQ0bDcwYmliM2VwYzdodTk1NGdlIn0.DNHHgVrv2rJ603Wzqnjg-g&limit=1' // more safe

    request({url: url, json: true}, (error , {body}) =>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features[0]){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
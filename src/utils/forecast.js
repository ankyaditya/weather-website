const request = require('request')

const geocode = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/451b9af90d22682357a3f2447544977c/' + encodeURI(latitude) + ',' + encodeURI(longitude) + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currentyly ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = geocode
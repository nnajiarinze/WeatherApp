const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoibm5hamlhcmluemUiLCJhIjoiY2p0MWJyeHNvMDl5MDQ1cHFjY2NyMHc5MCJ9.3uMbDqZX-Jc2xtNwULTbvA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        console.log('about to make the request');
        if (error) {
            console.log( 'an eror orccudre');
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log('it worked'); 

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
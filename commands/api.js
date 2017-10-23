const exec = require('child_process').exec;
const {api_token} = require('../config/config')

class Api {
    getUri() {
        return 'https://api.spotify.com/v1/search';
    }

    findSong(song, callback) {
        if (!api_token) {
            console.log('command requires api token')
            return
        }
        const curl = 'curl -s -X GET "' + this.getUri() + '?q=' + song + '&type=track&limit=1" -H "Accept: application/json" -H "Authorization: Bearer ' + api_token + '"'
        const grep = ' | grep -E -o "spotify:track:[a-zA-Z0-9]+" -m 1'

        exec(curl + grep, callback)
    }

    findArtist(artist, callback) {
        if (!api_token) {
            console.log('command requires api token')
            return
        }
        curl = 'curl -s -X GET "' + this.getUri() + '?q=' + artist + '&type=artist&limit=1" -H "Accept: application/json" -H "Authorization: Bearer ' + api_token + '"'
        grep = ' | grep -E -o "spotify:artist:[a-zA-Z0-9]+" -m 1'

        exec(curl + grep, callback(err, stdout))
    }
}


module.exports = new Api
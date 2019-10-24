const osascript = require('node-osascript');

class Actions {
    play() {
        console.log('Playing:')
        osascript.execute('tell application "Spotify" to play')
    }

    playTrack(track) {
        console.log('Playing:')
        exec('osascript -e \'tell application "Spotify" to play track "' + track + '"\'')
    }

    pause() {
        console.log('Pausing:')
        osascript.execute('tell application "Spotify" to pause')
    }

    next() {
        console.log('Playing Next:')
        osascript.execute('tell application "Spotify" to next track')
    }

    previous() {
        console.log('Playing Previous:')
        osascript.execute('tell application "Spotify" \n set player position to 0  \n  previous track  \n end tell')
    }
}


module.exports = new Actions
const exec = require('child_process').exec;

class Actions {
    play() {
        console.log('Playing:')
        exec('osascript -e \'tell application "Spotify" to play\'')
    }

    pause() {
        console.log('Pausing:')
        exec('osascript -e \'tell application "Spotify" to pause\'')
    }

    next() {
        console.log('Playing Next:')
        exec('osascript -e \'tell application "Spotify" to next track\'')
    }

    previous() {
        console.log('Playing Previous:')
        exec('osascript -e \'tell application "Spotify" \n set player position to 0  \n  previous track  \n end tell\'')
    }
}


module.exports = new Actions
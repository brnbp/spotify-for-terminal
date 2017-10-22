const exec = require('child_process').exec;

class Application {
    open() {
        console.log('Oppening Spotify')
        exec('osascript -e \'tell application "Spotify" to activate\'')
    }

    close() {
        console.log('Closing Spotify')
        exec('osascript -e \'tell application "Spotify" to quit\'')
    }
}

module.exports = new Application
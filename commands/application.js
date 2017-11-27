const osascript = require('node-osascript');

class Application {
    open() {
        console.log('Oppening Spotify')
        osascript.execute('tell application "Spotify" to activate')
    }

    close() {
        console.log('Closing Spotify')
        osascript.execute('tell application "Spotify" to quit')
    }
}

module.exports = new Application
const exec = require('child_process').exec;
const yargs = require('yargs')

const util = require('util');
const execAsync = util.promisify(require('child_process').exec);

yargs
  .command('play', 'play music', () => {}, (argv) => {
    console.log('Playing:')
    exec('osascript -e \'tell application "Spotify" to play\'')
   })
  .command('pause', 'pause music', () => {}, (argv) => {
    console.log('Pausing:')
    exec('osascript -e \'tell application "Spotify" to pause\'')
   })
   .command('next', 'next music', () => {}, (argv) => {
    console.log('Playing Next:')
    exec('osascript -e \'tell application "Spotify" to next track\'')
   })
  .command('prev', 'previous music', () => {}, (argv) => {
    console.log('Playing Previous:')
    exec('osascript -e \'tell application "Spotify" \n set player position to 0  \n  previous track  \n end tell\'')
   })
  .argv





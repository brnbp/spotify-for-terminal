const exec = require('child_process').exec;
const yargs = require('yargs')

yargs
  .command('play', 'play music', () => {}, (argv) => {
    console.log('Playing:')
    exec('osascript -e \'tell application "Spotify" to play\'')
   })
  .command('pause', 'pause music', () => {}, (argv) => {
    console.log('Pausing:')
    exec('osascript -e \'tell application "Spotify" to pause\'')
   })
  .argv





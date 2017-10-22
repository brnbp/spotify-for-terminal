const exec = require('child_process').exec;
const yargs = require('yargs')

const util = require('util');
const execAsync = util.promisify(require('child_process').exec);
const artist = async () => (await execAsync(' osascript -e \'tell application "Spotify" to artist of current track as string\'')).stdout
const album = async () =>  (await execAsync(' osascript -e \'tell application "Spotify" to album of current track as string\'')).stdout
const song = async () =>  (await execAsync(' osascript -e \'tell application "Spotify" to name of current track as string\'')).stdout
const songNumber = async () => (await execAsync(' osascript -e \'tell application "Spotify" to track number of current track as string\'')).stdout



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





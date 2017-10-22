const exec = require('child_process').exec;
const yargs = require('yargs')

const util = require('util');
const execAsync = util.promisify(require('child_process').exec);
const artist = async () => (await execAsync(' osascript -e \'tell application "Spotify" to artist of current track as string\'')).stdout
const album = async () =>  (await execAsync(' osascript -e \'tell application "Spotify" to album of current track as string\'')).stdout
const song = async () =>  (await execAsync(' osascript -e \'tell application "Spotify" to name of current track as string\'')).stdout
const songNumber = async () => (await execAsync(' osascript -e \'tell application "Spotify" to track number of current track as string\'')).stdout

const duration = async () => {
  const rawDuration = (await execAsync('osascript -e \'tell application "Spotify" to (duration of current track / 1000) as integer\'')).stdout
  
  const duration = Math.round(rawDuration)
  const minutes = Math.floor(duration / 60)
  let seconds = duration % 60

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return minutes + ':' + seconds
}

const currentPosition = async () => {
  const rawPosition = (await execAsync('osascript -e \'tell application "Spotify" to player position as integer\'')).stdout
  
  const position = Math.round(rawPosition)
  const minutes = Math.floor(position / 60)
  let seconds = position % 60

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return minutes + ':' + seconds
}

const getStatus = async () => {
  console.log((await artist()).trim() + ' - ' + (await album()).trim())
  console.log((await song()).trim() + ' - ' + (await currentPosition()) + '/' + (await duration()))
}

yargs
  .command('play', 'play music', () => {}, (argv) => {
    console.log('Playing:')
    exec('osascript -e \'tell application "Spotify" to play\'')
    getStatus()
   })
  .command('pause', 'pause music', () => {}, (argv) => {
    console.log('Pausing:')
    exec('osascript -e \'tell application "Spotify" to pause\'')
    getStatus()
   })
   .command('next', 'next music', () => {}, (argv) => {
    console.log('Playing Next:')
    exec('osascript -e \'tell application "Spotify" to next track\'')
    getStatus()
   })
  .command('prev', 'previous music', () => {}, (argv) => {
    console.log('Playing Previous:')
    exec('osascript -e \'tell application "Spotify" \n set player position to 0  \n  previous track  \n end tell\'')
    getStatus()
   })
  .command('status', 'status music', ()=>{}, argv => {
    getStatus()
  })
  .argv





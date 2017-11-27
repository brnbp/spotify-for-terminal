const util = require('util');
const execAsync = util.promisify(require('child_process').exec);

class Commands {
    async artist() {
        return (await execAsync(' osascript -e \'tell application "Spotify" to artist of current track as string\'')).stdout
    } 
    
    async album() {
        return (await execAsync(' osascript -e \'tell application "Spotify" to album of current track as string\'')).stdout
    }
    
    async song() {
        return (await execAsync(' osascript -e \'tell application "Spotify" to name of current track as string\'')).stdout
    }

    async songNumber() {
        return (await execAsync(' osascript -e \'tell application "Spotify" to track number of current track as string\'')).stdout
    } 
    
    async duration() {
        const rawDuration = (await execAsync('osascript -e \'tell application "Spotify" to (duration of current track / 1000) as integer\'')).stdout
        
        const duration = Math.round(rawDuration)
        const minutes = Math.floor(duration / 60)
        let seconds = duration % 60
    
        if (seconds < 10) {
        seconds = '0' + seconds
        }
    
        return minutes + ':' + seconds
    }
    
    async currentPosition() {
        const rawPosition = (await execAsync('osascript -e \'tell application "Spotify" to player position as integer\'')).stdout
        
        const position = Math.round(rawPosition)
        const minutes = Math.floor(position / 60)
        let seconds = position % 60
    
        if (seconds < 10) {
            seconds = '0' + seconds
        }
    
        return minutes + ':' + seconds
    }
   
    async getStatus() {
        console.log((await this.artist()).trim() + ' - ' + (await this.album()).trim())
        console.log((await this.song()).trim() + ' - ' + (await this.currentPosition()) + '/' + (await this.duration()))
    }
}


module.exports = new Commands
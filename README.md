## SPT - Spotify Player for Terminal

*spt* is a really simple NodeJS script to control
 [Spotify](https://www.spotify.com) from the command line on a Mac.

### Installation

#### Minimum requirements:
  - node: >= 7.6
  - macOs

You need to install the script manually by following a few steps:

1. Fetch a copy of this repository.
  ````
    Ex: 
      $ git clone git@github.com:brnbp/spotify-for-terminal.git && cd spotify-for-terminal
  ````

2. Navigate to the folder where you fetched the repository and install dependencies:
   ````
    $ yarn 
    or
    $ npm install
   ````

3. Make sure the file called `spt` is executable:
   ````
   chmod +x spt
   ````

4. Make a symbolic link for spt at a convenient location in your PATH, or set your PATH to include the folder where the file is located. 
    ````
      Ex: 
        $ sudo ln -s /path/spotify-for-terminal/spt /usr/local
    ````

## Usage

````
spt play      Play current song.
spt pause     Pause current song.

spt next      Skip to the next song.
spt prev      Return to the previous song.

spt status    Shows the play status, including the current song details.

spt open      Open Spotify.
spt quit      Stops playback and quits Spotify.
spt --help    Shows a summary of available commands
````
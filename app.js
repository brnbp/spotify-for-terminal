const yargs = require('yargs')

const Commands = require('./commands/attributes')
const Actions = require('./commands/actions')
const Application = require('./commands/application')

yargs
  .command('play', 'play music', () => {}, (argv) => {
    Actions.play()
    Commands.getStatus()
   })
  .command('pause', 'pause music', () => {}, (argv) => {
    Actions.pause()
    Commands.getStatus()
   })
   .command('next', 'next music', () => {}, (argv) => {
    Actions.next()
    Commands.getStatus()
   })
  .command('prev', 'previous music', () => {}, (argv) => {
    Actions.previous()
    Commands.getStatus()
   })
  .command('status', 'status music', () => {}, argv => {
    Commands.getStatus()
  })
  .command('open', 'status music', () => {}, argv => {
    Application.open()
  })
  .command('close', 'status music', () => {}, argv => {
    Application.close()
  })
  .argv





const logger = require('./logger');
const os = require('os');
const argv = require('yargs')
.command('add','add a note',{
  title:{
    describe:"The title of the note",
    required: true,
    alias:'t'
  },
  body:{
    describe:"The body of the note",
    required: true,
    alias: 'b'
  }
})
.help()
.argv;

console.log(argv.title, argv.body);

// console.log(argv._[0],argv.name);
// console.log(os.userInfo());

// console.log(logger.log('Qasim is a good boy', '. i really love you'));
// console.log(module,exports);ya

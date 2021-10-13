const yargs = require('yargs');

const notesUtils = require('./notes');

//customize yargs version 
yargs.version('2.0.0');

//create add command
yargs.command({
    command:'add',
    describe: 'add a new note to note app and save it',
    builder: {
        title:{
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtils.addNote(argv.title, argv.body);
    }
});

//create remove command
yargs.command({
    command:'remove',
    describe: 'remove a note from note app',
    builder:{
        title:{
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.removeNote(argv.title)
    }
});

//create list command
yargs.command({
    command:'list',
    describe: 'list of notes',
    handler(){
        notesUtils.listNotes();
    }
});

//create read command
yargs.command({
    command:'read',
    describe: 'read a note from note app',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notesUtils.readNote(argv.title);
    }
});

//parse command line arguments according to our configurations
yargs.parse();

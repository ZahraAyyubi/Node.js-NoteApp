const chalk = require('chalk');
const fs = require('fs');

const loadNotes = () => {
  try{
    const notes = fs.readFileSync('notes.json').toString();
    return JSON.parse(notes);
  }catch(err){
      console.log('file not found');
      return [];
  }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const addNote = (title, body) => {
    // load notes from file system
    const notes= loadNotes();

    //check note with this title is exist or not
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        // add new note to notesList
        notes.push({
            title,
            body
        });
        //save note
        saveNotes(notes);
        console.log(chalk.green.inverse('new note added'));

    }else{
        console.log(chalk.red.inverse('note title taken'));
        /*
        console.log('note with this title already exist so we add this body to the end of');
        for(const note of notes){
            if(note.title === title){
                note.body = duplicateNotes[0].body + "  " + body;
                break;
            }
        }*/
    }
}

const removeNote = (title) => {
    //load existing notes
    const notes = loadNotes();

    //remove note with this title
    const newNotes = notes.filter((note) => note.title !== title );

    if(notes.length === newNotes.length){
        console.log(chalk.red.inverse('note with this title not found!'));
    }else{
        //save newly array
        saveNotes(newNotes);
        console.log(chalk.green.inverse('note with this title removed!'));
    }
    
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.red.inverse('\nYour notes Title:\n'));
    notes.forEach(note => {
        console.log(note.title);
        //console.log(chalk.green.inverse('Body') +':  '+ note.body);
        console.log(chalk.red('.................................................'));
    });
}

const readNote = (title)=>{
    const notes = loadNotes();
    const specifiedNote = notes.find((note)=> note.title === title);
    if(specifiedNote){
        console.log(chalk.blue('title: ')+specifiedNote.title);
        console.log(chalk.green('body: ')+ specifiedNote.body);
    }else{
        console.log(chalk.red('note with this title not found'));
    }
    
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}
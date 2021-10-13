A note-app that stores notes in the file system and can be run with commands.
In this program, a new note can be added to the list of notes, with this command: node app.js add --title="your title" --body="your body" 
a note can be removed, with this command: node app.js remove --title="title of the note that you want to delete it" 
you can view list of notes: node app.js list 
and you can see details of a specific note: node app.js read --title="title of the note that you want read its body"

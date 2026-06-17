import { addNote, listNotes, clearNotes } from './store.js';

const [command, ...rest] = process.argv.slice(2);

switch (command) {
  case 'add':
    addNote(rest.join(' '));
    console.log('Note added.');
    break;
  case 'list':
    for (const note of listNotes()) {
      console.log(`[${note.timestamp}] ${note.text}`);
    }
    break;
  case 'clear':
    clearNotes();
    console.log('All notes cleared.');
    break;
  default:
    console.log('Usage: npm start -- <add|list|clear> [text]');
}

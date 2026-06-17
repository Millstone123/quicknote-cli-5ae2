import fs from 'fs';

const NOTES_FILE = new URL('../notes.json', import.meta.url);

function readAll() {
  try {
    return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeAll(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

export function addNote(text) {
  const notes = readAll();
  notes.push({ text, timestamp: new Date().toISOString() });
  writeAll(notes);
}

export function listNotes() {
  return readAll();
}

export function clearNotes() {
  writeAll([]);
}

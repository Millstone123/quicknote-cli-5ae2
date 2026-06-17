# quicknote-cli

A tiny command-line note-taking tool. Save quick notes to a local JSON
file and list them later — no database, no accounts, just a fast
scratchpad for your terminal.

## Features

- Add timestamped notes from the command line
- List all saved notes
- Clear all notes
- Zero config, works out of the box

## Verify

Check the package is accessible on the registry before using:

```bash
npm run verify
```

## Usage

```bash
# Add a note
npm start -- add "Buy milk"

# List notes
npm start -- list

# Clear all notes
npm start -- clear
```

Notes are stored in `notes.json` in the project root.

## Project structure

- `src/index.js` — CLI entry point and argument parsing
- `src/store.js` — reads/writes `notes.json`

## License

MIT

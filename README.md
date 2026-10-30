# Hangman!
In this exercise, you will recreate the word game Hangman.

In addition to building the app end-to-end independently, you'll learn the power of chaining array transformations (like map and filter) - a pillar of functional programming.

## Setup
Create a new Vite + React project (Vite needs Node 20.19+ or 22.12+; the devcontainer uses Node 24) and start it:

```sh
npm create vite@latest hangman -- --template react
cd hangman
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Release 0:
The interface should contain the following components:
- A component that displays the puzzle word (letters should be separated by spaces).  Letters that haven't been guessed should be displayed as an underscore - letters that have been guessed should be displayed.
- A component that contains a text input and a button to submit the guessed letter.  If the letter submitted has already been guessed, display an `alert()`.
- A component that displays letters that are not part of the puzzle word.

One last requirement: there should only be two pieces of state (two `useState` calls) in `App.jsx`:
 - **puzzle** - this should be the puzzle word (a string)
 - **guessedLetters** - this should be an array of all the letters that were guessed.

A JSON array is below... store it in a `.json` file (for example `src/words.json`) and import it appropriately in the application that you create.

## Words
```
[
  "marriageproof",
  "minionette",
  "unlichened",
  "electrocardiographic",
  "hippophagy",
  "polyphore",
  "debellate",
  "zyga",
  "antedonin",
  "hirudinean",
  "foremastman",
  "metapolitics",
  "bianisidine",
  "gros",
  "superindifferent",
  "collar",
  "maculose",
  "unphysically",
  "narrowish",
  "Bartonia",
  "inadherent",
  "arbitrary",
  "forefeelingly",
  "palame",
  "vina",
  "northwestward"
]
```

## Release 1:
- If someone guesses more than 6 letters that aren't part of the word, an alert displaying that the game is over should be displayed.

## Stretch Challenge:
- Incorporate a 3rd party API to get random words (instead of relying on a limited list of words)

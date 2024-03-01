import { useState } from 'react'
import './App.css'
import words from './data/words.json'
import WordDisplay from './components/WordDisplay';

function App() {
  // console.log(words);

  // Fake data we can use to make our dev workflow easier and faster
  const fakeWords = ['hello'];
  const fakeInitialGuessedLetters = { h: true, l: true };

  // Get a random word to guess from an array of possible words.
  const getPuzzleWord = (possibleWords) => {
    const index =  Math.floor(Math.random() * possibleWords.length);
    return possibleWords[index];
  };

  // Create state for our word to guess - the `puzzleWord`
  const [puzzleWord, setPuzzleWord] = useState(getPuzzleWord(fakeWords));


  // Create state which will hold an obj we'll use as a dict to track guessed letters
  // and which guesses were correct.
  const initialGuessedLetters = {};
  const [guessedLetters, setGuessedLetters] = useState(fakeInitialGuessedLetters);

  return (
    <>
      <h1>React Hangman</h1>
      <p>{puzzleWord}</p>
      <WordDisplay 
        puzzleWord={puzzleWord}
        guessedLetters={guessedLetters}
      />
    </>
  )

}

export default App

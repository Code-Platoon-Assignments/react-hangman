import { useState } from 'react'
import './App.css'
import words from './data/words.json'
import WordDisplay from './components/WordDisplay';

function App() {
  console.log(words);
  // const [puzzleWord, setPuzzleWord] = useState(() => {
  //   const index =  Math.floor(Math.random() * words.length);
  //   return words[index];
  // });

  // TODO: Remove the fake data
  const [puzzleWord, setPuzzleWord] = useState("hello");
  const [guessedLetters, setGuessedLetters] = useState({ h: true, l: true, o: true });

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

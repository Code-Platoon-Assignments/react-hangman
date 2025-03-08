import { useState } from "react";
import PuzzleWord from "./components/PuzzleWord";
import InputForm from "./components/InputForm";
import WrongGuess from "./components/WrongGuess";
import words from "./words.json";

/**
 *
 * 1. Make skeleton components for all the componets. AKA make a static UI.
 */

function App() {
  console.log(words);
  const [puzzle, setPuzzle] = useState(words[0]); // TODO: Grab random word
  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log("<App/>");
  console.log("puzzle", puzzle);
  console.log("guessedLetters", guessedLetters);

  // add a new letter to the guessed letters
  const handleGuess = (newLetter) =>
    setGuessedLetters([...guessedLetters, newLetter]);

  return (
    <>
      <PuzzleWord 
        guessedLetters={guessedLetters} 
        puzzle={puzzle} 
      />
      <WrongGuess guessedLetters={guessedLetters} puzzle={puzzle} />
      <InputForm handleGuess={handleGuess} />
    </>
  );
}

export default App;

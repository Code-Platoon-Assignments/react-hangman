import { getCorrectGuesses } from "../utilities";

export default function PuzzleWord({ guessedLetters, puzzle }) {
  console.log("<PuzzleWorld/>");
  return (
    <>
      <h2>PuzzleWord</h2>
      <div>Guess: {puzzle}</div>
      <div>
        Correct Guesses: {getCorrectGuesses(guessedLetters, puzzleWord)}
      </div>
    </>
  );
}

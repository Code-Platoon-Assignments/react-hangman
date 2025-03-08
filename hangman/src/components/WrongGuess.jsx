export default function WrongGuess({ puzzle, guessedLetters }) {
  console.log("<WrongGuess/>");

  const numGuessesLeft =  puzzle.length - guessedLetters.length
  console.log(numGuessesLeft)

  // TODO: Show the wrong guesses
  // TODO: Figure which guessed letters are wrong

  return (
    <>
      <h2>WrongGuess</h2>
      <p>{numGuessesLeft} Guesses left</p>
    </>
  );
}

function WordDisplay({ puzzleWord, guessedLetters }) {
  const puzzleWordArr = puzzleWord
    .split("")
    .map((letter) => { return { val: letter, isGuessed: false } })
    .map((letter) => { 
        if(guessedLetters[letter.val]) {
            return { ...letter, isGuessed: true };
        } else {
            return letter;
        }
    });

  console.log(puzzleWordArr)

  const SPACE = " ";
  const renderLetter = (letter) => letter.isGuessed ? letter.val : SPACE;

  return (
    <>
      <div>
        {puzzleWordArr.map((letter, i) => (
          <span key={i}>{renderLetter(letter)}</span>
        ))}
      </div>
    </>
  );
}

export default WordDisplay;

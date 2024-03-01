function WordDisplay({ puzzleWord, guessedLetters }) {
  const puzzleWordArr = puzzleWord
    .split("")
    .map((letter) => { return { val: letter, isGuessed: false } })
    // NOTE: We probably should put the logic below in the .map() above and just have one .map() if we wanted.
    // it is not uncommon though to "chain" multiple .map() and .filter() calls, each of which
    // does a specific thing, so for learning purposes it is good to see this implementation.
    .map((letter) => { 
        if(guessedLetters[letter.val]) {
            return { ...letter, isGuessed: true };
        } else {
            return letter;
        }
    });

  console.log('<WordDisplay/> puzzleWordArr', puzzleWordArr);

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

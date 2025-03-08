const getCorrectGuesses = (allGuesses, puzzleWord) =>
allGuesses.filter((g) => puzzleWord.includes(g));


export {
    getCorrectGuesses,
}
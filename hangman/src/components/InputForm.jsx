import { useState } from "react";

export default function InputForm({ handleGuess }) {
  console.log("<InputForm/>");

  const [inputValue, setInputValue] = useState("")

  const handleClick = () => {
    console.log('handleclick')
    console.log(inputValue)
    handleGuess(inputValue)
    // todo: make real
  };

  return (
    <>
      <input 
        value={inputValue} 
        placeholder="Enter Guess" 
        onChange={(e) => setInputValue(e.target.value)}
    />
      <button type="button" onClick={handleClick}>
        click
      </button>
    </>
  );
}

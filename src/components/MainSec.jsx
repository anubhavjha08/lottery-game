import { useState } from "react";
import "../css_files/MainSec.css";

export default function MainSec({ setIsWinner, IsWinner }) {
  const [UserGuess, setUserGuess] = useState("");
  const [Instruction, setInstruction] = useState("Press Generate to Start");
  const [RandomVal, setRandomVal] = useState(null);
  const [ScoreCounter, setScoreCounter] = useState(0);
  const [Signal, setSignal] = useState(true);

  let userInput = (event) => {
    setUserGuess(event.target.value);
  };

  let randomValueGenerator = () => {
    setUserGuess("");
    let x = Math.floor(Math.random() * 10 + 1);
    setRandomVal(x);
    console.log(x);
    setInstruction("Now, Input you guess below");
    setIsWinner(false);
    setSignal(true);
  };

  let checkLottery = () => {
    if (parseInt(UserGuess) === RandomVal) {
      console.log("Right");
      setIsWinner(true);
      scoreCounter();
    } else {
      console.log("wrong!");
      setScoreCounter(0);
      setSignal(false);
    }
  };

  let scoreCounter = () => {
    setScoreCounter((scoreCounter) => scoreCounter + 1);
  };
  return (
    <div className="MainSec">
      <p>{Signal ? null : "Wrong Guess, Press Generate to play again!"}</p>
      <h3 className="score">Score : {ScoreCounter}</h3>

      <button className="Generate" onClick={randomValueGenerator}>
        Generate
      </button>
      <p className="instruction">{Instruction}</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="1-10(inclusive)"
        onChange={userInput}
        value={UserGuess}
      />
      <button className="Checker" onClick={checkLottery}>
        Check Guess
      </button>
      <p>{IsWinner ? "Press Generate to play again :)" : "Never Give up!"}</p>
    </div>
  );
}

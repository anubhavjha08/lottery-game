import { useState } from "react";
import "../css_files/MainSec.css";
import christmasStars from "../assets/christmas-stars.png";

export default function MainSec({ setIsWinner, IsWinner }) {
  const [UserGuess, setUserGuess] = useState("");
  const [Instruction, setInstruction] = useState("Press Generate to Start");
  const [RandomVal, setRandomVal] = useState(null);
  const [ScoreCounter, setScoreCounter] = useState(0);
  const [TurnCounter, setTurnCounter] = useState(0);
  const [Signal, setSignal] = useState(true);
  const [isClicked, setisClicked] = useState(false);

  let userInput = (event) => {
    setUserGuess(event.target.value);
  };

  let randomValueGenerator = () => {
    setUserGuess("");
    let x = Math.floor(Math.random() * 10 + 1);
    // console.log(x);
    setRandomVal(x);
    setInstruction("Now, Input you guess below");
    setIsWinner(false);
    setSignal(true);
    setisClicked(true);
    turnCounter();
  };

  let checkLottery = () => {
    if (parseInt(UserGuess) === RandomVal) {
      setIsWinner(true);
      scoreCounter();
      setisClicked(false);
      setInstruction("Press Generate to Score more!");
    } else {
      setScoreCounter(0);
      setSignal(false);
      setisClicked(false);
      setInstruction("Press Generate to Start again!");
    }
  };

  let scoreCounter = () => {
    setScoreCounter((scoreCounter) => scoreCounter + 1);
  };
  let turnCounter = () => {
    setTurnCounter((turnCounter) => turnCounter + 1);
  };
  return (
    <div className="MainSec">
      <p className="Turncounter">Turn: {TurnCounter}</p>
      <p className="Signal1">{Signal ? null : "Wrong Guess:)"}</p>
      <p className="Signal2">{Signal ? null : `Right Ans: ${RandomVal}`}</p>
      <h3 className="score">Score : {ScoreCounter}</h3>

      {isClicked ? null : (
        <button className="Generate" onClick={randomValueGenerator}>
          <img
            className="img-left"
            src={christmasStars}
            alt="Christmas Stars1"
          />
          <span>Generate</span>
          <img
            className="img-right"
            src={christmasStars}
            alt="Christmas Stars2"
          />
        </button>
      )}
      <p className="instruction">{Instruction}</p>

      {isClicked ? (
        <input
          type="text"
          name=""
          id=""
          placeholder="1-10(inclusive)"
          onChange={userInput}
          value={UserGuess}
        />
      ) : null}

      {isClicked ? (
        <button className="Checker" onClick={checkLottery}>
          Check Guess
        </button>
      ) : null}
      <p>{IsWinner ? null : "Never Give up!"}</p>
    </div>
  );
}

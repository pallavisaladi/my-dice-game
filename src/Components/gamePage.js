import Button from "./button";
import "./homePage.css";
import "./gamePage.css";
import { useState } from "react";
import Gameplay from "./gamePlay";

function Gamepage() {
  const buttons = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [buttonValue, setButtonValue] = useState(null);
  const [showError, setShowError] = useState(false);
  const handleClick = (e) => {
    setButtonValue(Number(e.target.innerText));
    setShowError(false);
  };
  return (
    <div className="gameContainer">
      <p className="errorText">
        {showError ? "You have not selected any number" : ""}
      </p>
      <div className="topContainer">
        <div className="scoreContainer">
          <p className="score">{score}</p>
          <p className="scoreText">Total Score</p>
        </div>
        <div className="buttonContainer">
          <div className="buttonItems">
            {buttons.map((item, index) => {
              return (
                <Button
                  className={
                    buttonValue === item
                      ? "numberButton selectedButton"
                      : "numberButton"
                  }
                  key={index}
                  text={item}
                  innerTextClass="innerTextClass"
                  onClick={handleClick}
                />
              );
            })}
          </div>
          <p className="SelectNumbertext">Select Number</p>
        </div>
      </div>
      <div className="rolledDiceImage">
        <Gameplay
          score={score}
          setScore={setScore}
          setDiceValue={setDiceValue}
          diceValue={diceValue}
          buttonValue={buttonValue}
          setButtonValue={setButtonValue}
          setShowError={setShowError}
        />
      </div>
    </div>
  );
}

export default Gamepage;

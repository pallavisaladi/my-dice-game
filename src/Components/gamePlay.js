import { useState } from "react";
import dice1 from "../images/dice_1.png";
import dice2 from "../images/dice_2.png";
import dice3 from "../images/dice_3.png";
import dice4 from "../images/dice_4.png";
import dice5 from "../images/dice_5.png";
import dice6 from "../images/dice_6.png";
import "./gamePage.css";
import Button from "./button";
import Rules from "./rules";

const Gameplay = ({
  score,
  setScore,
  setDiceValue,
  buttonValue,
  diceValue,
  setButtonValue,
  setShowError,
}) => {
  const [showRulesCard, setShowRulesCard] = useState(false);
  const resetScore = () => {
    setScore(0);
    setButtonValue(null);
    setDiceValue(0);
  };
  const getDiceImage = (diceValue, buttonValue) => {
    if (buttonValue === null) {
      return dice1;
    }
    switch (diceValue) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return dice1;
    }
  };
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  const rollDice = () => {
    let randomDiceValue = getRandomNumber();
    console.log(randomDiceValue, buttonValue);
    if (randomDiceValue !== 0 && buttonValue !== null) {
      setDiceValue(randomDiceValue);
      if (randomDiceValue === buttonValue) {
        setScore((score) => {
          return score + randomDiceValue;
        });
      } else {
        setScore((score) => {
          return score - 2;
        });
      }
    } else {
      setShowError(true);
    }
  };
  const showRules = () => {
    setShowRulesCard(!showRulesCard);
  };
  return (
    <div className="rolledDiceContainer">
      <img
        src={getDiceImage(diceValue, buttonValue)}
        alt="rolldiceimage"
        height="250px"
        width="250px"
        onClick={rollDice}
      />
      <p className="rolledDiceText">Click on Dice to roll</p>
      <Button text="Reset Score" className="resetButton" onClick={resetScore} />
      <Button
        text={showRulesCard ? "Hide Rules" : "Show Rules"}
        className="gameRulesButton"
        onClick={showRules}
      />
      {showRulesCard && <Rules />}
    </div>
  );
};

export default Gameplay;

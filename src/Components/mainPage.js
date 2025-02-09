import dices from "../Images/dices.png";
import "./mainPage.css";

const Mainpage = ({ gamePlay, setGamePlay }) => {
  const startGame = () => {
    setGamePlay(true);
  };
  return (
    <div className="mainContainer">
      <div className="middlecontainer">
        <div className="imagecontainer">
          <img src={dices} alt="Dice image" width="100%" />
        </div>
        <div className="nameContainer">
          <p className="text">DICE GAME</p>
          <button className="buttonName" onClick={startGame}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;

import { useState } from "react";
import "./homePage.css";
import Gamepage from "./gamePage";
import Mainpage from "./mainPage";

function Homepage() {
  const [gamePlay, setGamePlay] = useState(false);
  return (
    <div>
      <div>
        {!gamePlay ? (
          <Mainpage gamePlay={gamePlay} setGamePlay={setGamePlay} />
        ) : (
          <Gamepage />
        )}
      </div>
    </div>
  );
}

export default Homepage;

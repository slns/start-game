import React from "react";
import PlayAgain from "start-game/PlayAgain";

/** Custom message to game over */
export default function ExamplePlayAgainGameOver() {
 const onClick = () => {
    console.log('Clicked');
  }
  return <PlayAgain onClick={onClick} />;
}

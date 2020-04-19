import React from "react";
import PlayAgain from "start-game/PlayAgain";

/** Custom message to win*/
export default function ExamplePlayAgainWin() {
 const onClick = () => {
    console.log('Clicked');
  }
  return <PlayAgain onClick={onClick} gameStatus='won'/>;
}

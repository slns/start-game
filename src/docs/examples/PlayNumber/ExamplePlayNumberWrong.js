import React from "react";
import PlayNumber from "start-game/PlayNumber";

/** Button to show wrong number */
export default function ExamplePlayNumberWrong() {
 const onClick = () => {
    console.log('Clicked');
  }
  const number = 1;
  return (
    <PlayNumber
    key={number}
    status='wrong'
    number={number}
    onClick={onClick}
    />);
}

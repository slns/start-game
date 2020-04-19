import React from "react";
import PlayNumber from "start-game/PlayNumber";

/** Button to show used number */
export default function ExamplePlayNumberUsed() {
 const onClick = () => {
    console.log('Clicked');
  }
  const number = 6;
  return (
    <PlayNumber
    key={number}
    status='used'
    number={number}
    onClick={onClick}
    />);
}

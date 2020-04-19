import React from "react";
import PlayNumber from "start-game/PlayNumber";

/** Button to show a candidate number */
export default function ExamplePlayNumberCandidate() {
 const onClick = () => {
    console.log('Clicked');
  }
  const number = 7;
  return (
    <PlayNumber
    key={number}
    status='candidate'
    number={number}
    onClick={onClick}
    />);
}

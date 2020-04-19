import React from "react";
import PlayNumber from "start-game/PlayNumber";

/** Button to show one available number */
export default function ExamplePlayNumberAvailable() {
 const onClick = () => {
    console.log('Clicked');
  }
  const number = 3;
  return (
    <PlayNumber
    key={number}
    status='available'
    number={number}
    onClick={onClick}
    />);
}

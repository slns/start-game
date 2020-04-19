import React from "react";
import StarsDisplay from "start-game/StarsDisplay";
import useGameState from "start-game/Game/useGameState";

/** Random stars */
export default function ExampleStarsDisplay() {
  const { stars } = useGameState();
  return <StarsDisplay count={stars} />;
}

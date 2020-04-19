import React, { useState } from "react";

import Game from "start-game/Game";

/** Component to assemble all game components */
export default function ExampleGame() {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};
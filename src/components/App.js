"use strict";

import React from "react";
import Router from "../router/router";

function App() {
  return <Router />;
}

export default App;

// import React, { useState } from 'react';

// import Game from './Game/Game';

// const App = () => {
//   const [gameId, setGameId] = useState(1);
//   return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
// };


// export default App;
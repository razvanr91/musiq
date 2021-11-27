import React, { useState } from "react";
import "./styles/app.scss";
import ChillHop from "./data";

import Song from "./components/Song";
import Controls from "./components/Controls";

function App() {
  // State
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controls />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./styles/app.scss";
import ChillHop from "./data";

import Song from "./components/Song";
import Controls from "./components/Controls";
import Library from "./components/Library";

function App() {
  // State
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controls currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;

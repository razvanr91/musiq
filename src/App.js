import React, { useRef, useState } from "react";
import "./styles/app.scss";
import ChillHop from "./data";

import Song from "./components/Song";
import Controls from "./components/Controls";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Reference
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    playingAt: 0,
    duration: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false);

  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration
    setSongInfo({
      ...songInfo,
      playingAt: current,
      duration
    })
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Controls setSongs={setSongs} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} />
      <Library libraryStatus={libraryStatus} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
    </div>
  );
}

export default App;

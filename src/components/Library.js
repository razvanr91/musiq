import React from "react";
import ListSong from "./ListSong";

export default function Library({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="songs-list">
                {songs.map(song => {
                    return (<ListSong key={song.id} setSongs={setSongs} currentSong={song} setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} />)
                })}
            </div>
        </div>
    );
}
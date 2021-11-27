import React from "react";
import ListSong from "./ListSong";

export default function Library({ songs, currentSong, setCurrentSong }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="songs-list">
                {songs.map(song => {
                    return (<ListSong key={song.id} currentSong={song} setCurrentSong={setCurrentSong} songs={songs} />)
                })}
            </div>
        </div>
    );
}
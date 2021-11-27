import React from "react";

export default function ListSong({ currentSong }) {
    return (
        <div className="list-song">
            <img src={currentSong.cover} alt={currentSong.name} />
            <div className="song-info">
                <h3>{currentSong.name}</h3>
                <h4>{currentSong.artist}</h4>
            </div>
        </div>
    );
}
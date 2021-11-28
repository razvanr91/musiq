import React from "react";

export default function ListSong({ currentSong, setCurrentSong, songs, audioRef, isPlaying, setSongs }) {
    async function songSelectHandler() {
        let selectedSong = songs.filter(song => song.id === currentSong.id)[0]
        await setCurrentSong(selectedSong);

        const newSongs = songs.map(song => {
            if (currentSong.id === song.id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })

        setSongs(newSongs);
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`list-song ${currentSong.active ? "selected" : ""}`}>
            <img src={currentSong.cover} alt={currentSong.name} />
            <div className="song-info">
                <h3>{currentSong.name}</h3>
                <h4>{currentSong.artist}</h4>
            </div>
        </div>
    );
}
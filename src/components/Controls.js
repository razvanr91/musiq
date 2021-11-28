import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function Controls({ audioRef, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, currentSong, setCurrentSong, setSongs }) {
    // Use Effect
    useEffect(() => {
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return { ...song, active: true };
            } else {
                return { ...song, active: false };
            }
        })
        setSongs(newSongs);
    }, [currentSong])

    function playSongHandler(e) {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    function timeFormat(time) {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    }

    function dragHandler(e) {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({
            ...songInfo,
            playingAt: e.target.value
        });
    }

    async function trackChangeHandler(direction) {
        let currentTrackIndex = songs.findIndex(song => song.id === currentSong.id);
        if (direction === "next") {
            await setCurrentSong(songs[(currentTrackIndex + 1) % songs.length]);
        }

        if (direction === "previous") {
            if ((currentTrackIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentTrackIndex - 1) % songs.length]);
        }

        if (isPlaying && currentSong !== null) audioRef.current.play();
    }

    const trackAnimation = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };

    return (
        <div className="controls-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.playingAt)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="progress">
                    <input onChange={dragHandler} type="range" min="0" max={songInfo.duration || "0:00"} value={songInfo.playingAt} />
                    <div style={trackAnimation} className="animate-progress"></div>
                </div>

                <p>{songInfo.duration ? timeFormat(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="control-buttons">
                <FontAwesomeIcon onClick={() => trackChangeHandler("previous")} className="previousButton" size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={playSongHandler} className="playButton" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => trackChangeHandler("next")} className="nextButton" size="2x" icon={faForward} />
            </div>
        </div>
    );
}
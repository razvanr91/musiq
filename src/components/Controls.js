import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function Controls({ audioRef, isPlaying, setIsPlaying, songInfo, setSongInfo }) {
    // State

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

    return (
        <div className="controls-container">
            <div className="time-control">
                <p>{timeFormat(songInfo.playingAt)}</p>
                <input onChange={dragHandler} type="range" min="0" max={songInfo.duration ? songInfo.duration : "0:00"} value={songInfo.playingAt} />
                <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="control-buttons">
                <FontAwesomeIcon className="previousButton" size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={playSongHandler} className="playButton" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="nextButton" size="2x" icon={faForward} />
            </div>
        </div>
    );
}
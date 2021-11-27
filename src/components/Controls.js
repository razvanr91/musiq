import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function Controls({ currentSong, isPlaying, setIsPlaying }) {
    // Song ref
    const audioRef = useRef(null);

    function playSongHandler(e) {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="controls-container">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="control-buttons">
                <FontAwesomeIcon className="previousButton" size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={playSongHandler} className="playButton" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="nextButton" size="2x" icon={faForward} />
            </div>
            <audio ref={audioRef} src={currentSong.audio} />
        </div>
    );
}
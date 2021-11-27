import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function Controls() {
    return (
        <div className="controls">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="control-buttons">
                <FontAwesomeIcon className="previousButton" size="2x" icon={faBackward} />
                <FontAwesomeIcon className="playButton" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="nextButton" size="2x" icon={faForward} />
            </div>
        </div>
    );
}
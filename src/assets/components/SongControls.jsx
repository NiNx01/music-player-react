import React from "react";
import "./SongControls.css" ;


function SongControls({ token , seekbarPosition="0%" ,trackProgress="0:00", trackDuration}) {
  
  return (
    <div className="song-controls">
      <div className="control-buttons">
        <span>
          <i className="ri-shuffle-fill"></i>
        </span>
        <span className="skip-icon">
          <i className="ri-skip-left-fill"></i>
        </span>
        <span className="play-pause-icon" >
          <i className="ri-play-circle-fill"></i>
        </span>
        <span className="skip-icon">
          <i className="ri-skip-right-fill"></i>
        </span>
        <span>
          <i className="ri-repeat-2-line "></i>
        </span>
      </div>

      <div className="seekbar-wrapper">
                <p className="start-time">{trackProgress}</p>
                
                <div className="seekbar">
                    <div className="seekbar-active" style={{width : seekbarPosition}}>
                        <div className="seekbar-cursor"></div>
                    </div>
                </div>
                
                <p className="end-time">{trackDuration}</p>
      </div>

    </div>
  );
}

export default SongControls;

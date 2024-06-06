import React from 'react'
import "./OtherControls.css"

function OtherControls() {
  return (
    <div className="other-controls">
    <div className="seekbar-wrapper">
        <span className="volume-icon"><i className="ri-volume-down-fill"></i></span>
        
        <div className="seekbar">
            <div className="seekbar-active">
                <div className="seekbar-cursor"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default OtherControls
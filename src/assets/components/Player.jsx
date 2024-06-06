import React, { useEffect, useState } from 'react' ;
import "./Player.css" ;
import Sidebar from './Sidebar' ;
import Mainpage from './Mainpage' ;
import SongDetails from './SongDetails';
import SongControls from './SongControls';
import OtherControls from './OtherControls';
import { useDataLayerValue } from '../../DataLayer';



function Player({spotify , token}) {

  const [{ track , recentTrack }, dispatch] = useDataLayerValue();
  const trackProgress = track?.progress_ms ;
  const trackDuration = track?.item?.duration_ms ;

  const recentTrackDuration = recentTrack?.items[0]?.track?.duration_ms ;

  function millisToMinutesAndSeconds(trackDuration) {
    const minutes = Math.floor(trackDuration / 60000);
    const seconds = Math.floor((trackDuration % 60000) / 1000);
    return (
      seconds == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  }

  let seekbarPosition = "0%" ;
  
  let trackProgressInMinutes = "0:00" ;
  let trackDurationInMinutes = "" ;
  
  if(trackProgress != undefined && trackDuration != undefined){
   seekbarPosition = ((trackProgress/trackDuration) * 100) + "%" ;
   trackProgressInMinutes = millisToMinutesAndSeconds(trackProgress) ;
   trackDurationInMinutes = millisToMinutesAndSeconds(trackDuration) ;
}else {

   trackDurationInMinutes = millisToMinutesAndSeconds(recentTrackDuration) ;

}


  return (
    <div className='app-wrapper'>
        <div className='main-wrapper'>
          <Sidebar />
          <Mainpage spotify={spotify} />
        </div>

        <div className="controls-wrapper" >
          <SongDetails />
          <SongControls token={token} seekbarPosition={seekbarPosition} trackProgress={trackProgressInMinutes} trackDuration = {trackDurationInMinutes}/>
          <OtherControls />
        </div>
    </div>
  )
}

export default Player
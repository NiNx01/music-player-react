import React, { useState , useEffect} from 'react'
import "./Playlist.css" ;
import { useDataLayerValue } from '../../DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();



function Playlist({playlistID, playlistTitle, playlistOwner ,playlistImg}) {
  
  
  return (
    
    <div className="playlist" data-playlist-id={playlistID}>
        <img height={48} width={48} src={playlistImg} alt="" className="playlist__img" />
        <div className="playlist__content">
            <h4 className="playlist__title">{playlistTitle}</h4>
            <p className="playlist__type">Playlist · {playlistOwner}</p>
        </div>
    </div>
  )
}

export default Playlist
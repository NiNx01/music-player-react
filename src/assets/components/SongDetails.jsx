import React from 'react'
import "./SongDetails.css" ;
import { useDataLayerValue } from '../../DataLayer';

function SongDetails() {
  const [{ track , recentTrack } , dispatch] = useDataLayerValue();
  console.log(recentTrack)
  return (
    <div className="song-details">
        <img width={56} height={56} src={track?.item?.album?.images[0].url || recentTrack?.items[0]?.track?.album?.images[0].url } alt="" className="song-img" />
        <div className="song-details-text">
            <h5 className="song-name">{track?.item?.name || recentTrack?.items[0]?.track?.name}</h5>
            <p className="artist-name">{track?.item?.artists?.map(artist=>(artist.name)).join(", ") || recentTrack?.items[0]?.track?.artists?.map(artist=>(artist.name)).join(", ")}</p>
        </div>
    </div>
  )
}

export default SongDetails
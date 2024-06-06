import React from 'react'
import "./SidebarBody.css" ;
import Playlist from './Playlist';
import { useDataLayerValue } from '../../DataLayer';

function SidebarBody() {
  const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);
  return (
    <div className='side-bar__body'>
      <div className="side-bar__body-title-wrapper">
        <span className="side-bar__body-icon">
          <i className="ri-booklet-fill"></i>
        </span>
        <h3 className="side-bar__body-title">Your library</h3>
      </div>
      <hr className='divider' />
      <div className="playlist-wrapper">
        {playlists?.items?.map(playlist=>(
        <Playlist playlistID={playlist.id} playlistTitle={playlist.name} playlistOwner={playlist.owner.display_name} playlistImg={playlist.images[0].url}  />
        ))}
        
      </div>
    </div>
  )
}

export default SidebarBody
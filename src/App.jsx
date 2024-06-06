import { useEffect, useState } from "react";
import "./App.css";
import Login from "./assets/components/Login";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./assets/components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();


 function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  console.log("user" , user);
  console.log("token" , token);

  // Storing the token from URL
  useEffect(() => {
    const tokenObj = getTokenFromURL();
    window.location.hash = "";
    const access_token = tokenObj.access_token;

    console.log("tokenObj" , tokenObj );

  
    if (access_token) {
      // setToken(access_token);
      dispatch({
        type: "SET_TOKEN",
        token: access_token,
      });

      spotify.setAccessToken(access_token);
      // this shows the current logged in user's details
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // getting user playlists
      spotify.getUserPlaylists({limit : 50}).then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
        
      })

      // TEST
       // getting user song
       spotify.getMyCurrentPlaybackState().then((track)=>{
        dispatch({
          type: "SET_TRACK",
          track: track
        })
        
      })


      // getting last played
      spotify.getMyRecentlyPlayedTracks().then((recentTrack)=>{
        dispatch({
          type : "SET_RECENT_TRACK",
          recentTrack : recentTrack
        })
      })


      // spotify.getPlaylist("6nTHzQ2yg6W1DmEdNZJbZ6").then(response=>{
      //   dispatch({
      //     type : "THE_EMINEM",
      //     the_eminem : response 
      //   })
       
      // })


    }

    
    


  }, []);

  // Page Output
  return <>{token ? <Player spotify={spotify} token={token} /> : <Login />}</>;
}

export default App;

export const authEndpoint = "https://accounts.spotify.com/authorize" ;
const client_id = "cc5ef04b61a9431a85b778464ee67535" ;
const redirect_uri = "http://localhost:5173/" ;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "streaming",
    "app-remote-control"
] ;

export const loginURL = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true` ;

export const getTokenFromURL = ()=>{
   return window.location.hash.substring(1).split("&").reduce((initial , item)=>{
        let parts = item.split("=") ;
        initial[parts[0]] = decodeURIComponent(parts[1]) ;
        return initial ;
    }, {})
}
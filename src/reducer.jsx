export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      }

      case "SET_TRACK":
      return {
        ...state,
        track: action.track
      }

      case "SET_RECENT_TRACK":
      return {
        ...state,
        recentTrack: action.recentTrack
      }

     case "THE_EMINEM" :
      return {
        ...state,
        the_eminem : action.the_eminem
      }

    default:
      return state;
  }
};

export default reducer;

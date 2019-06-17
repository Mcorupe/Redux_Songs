import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", artist:"TLC" ,duration: "4:05" },
    { title: "Macarena",artist: "Los Del Rio", duration: "2:30" },
    { title: "All Star", artist: "Smash Mouth" ,duration: "3:15" },
    { title: "I Want it That Way", artist: "Backstreet Boys", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

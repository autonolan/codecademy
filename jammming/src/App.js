import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import PlaylistName from './components/PlaylistName';
import getAccessToken from './getAccessToken';

const searchEndpoint='https://api.spotify.com/v1/search?';
const searchType = 'type=track';
const auth = await getAccessToken();
console.log(auth.access_token);
const exampleSearchData = [
  {
      "name": "Song1",
      "artist": "Artist1",
      "album": "Album1",
      "id": "1",
      "uri": "spotify:track:0E2VhScNmFuE6K2Xt6dD7k"
  },
  {
      "name": "Song2",
      "artist": "Artist2",
      "album": "Album2",
      "id": "2",
      "uri": "spotify:track:6sV4fBPsUMAiEIygFXViK1"
  },
  {
      "name": "Song3",
      "artist": "Artist3",
      "album": "Album3",
      "id": "3",
      "uri": "spotify:track:5tuNuA75rRC8cnsXDdxrXS"
  }
];

const examplePlaylist = [
  {
      name: 'PlaylistSong1',
      artist: 'PlaylistArtist1',
      album: 'PlaylistAlbum1',
      id: 1,
      uri: 'spotify:track:44c1Fee8CMkU7407C4eiqA'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const updateSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const [searchResults, setSearchResults] = useState([]);
  //const [accessToken, setAccessToken] = useState('');
  //setAccessToken(auth.access_token)
  async function handleSearch(e) {
        e.preventDefault();
        let url = searchEndpoint + 'q=' + searchTerm.replaceAll(' ', '+') + '&' + searchType;
        const response = await fetch(url, {method: "GET", headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.access_token}});
        const data = await response.json();
        console.log(data);
        setSearchResults(data.tracks.items);
        //setSearchResults(exampleSearchData);
        console.log(searchResults);
    };
  async function retrieveUser(e) {
    e.preventDefault();
    console.log(auth.access_token);
    let url = 'https://api.spotify.com/v1/me';
    const response = await fetch(url, {method: "GET", headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.access_token}});
    const data = await response.json();
    console.log(data);
    //setUserId(data.tracks.items);
  };
  const [playlist, setPlaylist] = useState(examplePlaylist);
  const addTrack = (track) => {
    if (playlist.every(playlistTrack => {
          return playlistTrack.id !== track.id
        })) {
          setPlaylist(prev => [...prev, track]);
        };
    };
  const removeTrack = (track) => {
    setPlaylist(playlist.filter(playlistTrack => {
      return playlistTrack.id !== track.id
    }));
  };
  const [playlistName, setPlaylistName] = useState('');
  const updatePlaylistName = (e) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };
  const [uriArray, setURIArray] = useState('');
  const createURIArray = () => {
    setURIArray(playlist.forEach(track => {
      return track.uri;
    }));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <PlaylistName playlistName={playlistName} updatePlaylistName={updatePlaylistName} retrieveUser={retrieveUser}/>
          <Playlist playlist={playlist} removeTrack={removeTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;

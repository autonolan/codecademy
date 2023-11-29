import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import getAccessToken from './getAccessToken';

const searchEndpoint='https://api.spotify.com/v1/search?';
const searchType = 'type=track';
const auth = await getAccessToken();
console.log(auth);
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
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
        e.preventDefault();
        setSearchResults(exampleSearchData);
        console.log(searchResults);
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
        <SearchBar handleSearch={handleSearch} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <Playlist playlist={playlist} removeTrack={removeTrack} playlistName={playlistName} updatePlaylistName={updatePlaylistName}/>
        </div>
      </div>
    </div>
  );
}

export default App;

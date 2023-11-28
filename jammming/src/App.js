import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const exampleSearchData = [
  {
      "name": "Song1",
      "artist": "Artist1",
      "album": "Album1",
      "id": "1"
  },
  {
      "name": "Song2",
      "artist": "Artist2",
      "album": "Album2",
      "id": "2"
  },
  {
      "name": "Song3",
      "artist": "Artist3",
      "album": "Album3",
      "id": "3"
  }
];

const examplePlaylist = [
  {
      name: 'PlaylistSong1',
      artist: 'PlaylistArtist1',
      album: 'PlaylistAlbum1',
      id: 1
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <SearchBar handleSearch={handleSearch} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <SearchResults searchResults={searchResults} addTrack={addTrack} />
          <Playlist playlist={playlist}/>
        </div>
      </div>
    </div>
  );
}

export default App;

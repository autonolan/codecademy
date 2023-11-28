import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

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

export default function Search() {
    console.log(exampleSearchData);
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchResults(exampleSearchData);
        console.log(searchResults);
    }
    return (
        <div>
          <SearchBar handleSearch={handleSearch} />
          <SearchResults searchResults={searchResults}/>
        </div>
    )
}
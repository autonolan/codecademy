import React, {useState} from 'react';
import Playlist from '../components/Playlist';

const examplePlaylist = [
    {
        name: 'PlaylistSong1',
        artist: 'PlaylistArtist1',
        album: 'PlaylistAlbum1',
        id: 1
    }
];

export default function CreatePlaylist() {
    const [playlist, setPlaylist] = useState(examplePlaylist);
    const updatePlaylist = () => {
        console.log('updating playlist...');
        setPlaylist(examplePlaylist);
    }
    return (
        <Playlist updatePlaylist={updatePlaylist} playlist={playlist}/>
    )
}
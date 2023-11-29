import React from 'react';

export default function PlaylistName(props) {
    return (
        <form onChange={props.updatePlaylistName}>
            <label htmlFor="playlistname" placeholder='Playlist Name'></label>
            <input type="text" name="playlistname" id="playlistname" value={props.playlistName}></input>
        </form>
    )
};
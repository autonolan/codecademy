import React from 'react';

export default function PlaylistName(props) {
    return (
        <form onSubmit={props.retrieveUser} >
            <label htmlFor="playlistname" placeholder='Playlist Name'></label>
            <input type="text" name="playlistname" id="playlistname" onChange={props.updatePlaylistName} value={props.playlistName}></input>
            <input type="submit" value="Save" />
        </form>
    )
};
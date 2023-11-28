import React from 'react';
import Track from '../components/Track';

export default function Playlist(props) {
    return (
        <>
          <ul>
            {props.playlist.map(track => {
                return <Track details={track} key={track.id}/>
            })}
          </ul>
        </>
    )
}
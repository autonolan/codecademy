import React from 'react';
import Track from '../components/Track';
import RemoveButton from './RemoveButton';
import PlaylistName from './PlaylistName';

export default function Playlist(props) {
    return (
        <>
          <ul>
            {props.playlist.map(track => {
                return (
                <>
                  <Track details={track} key={track.id}/>
                  <RemoveButton removeTrack={props.removeTrack} track={track} key={track.id}/>
                </>
                )
            })}
          </ul>
        </>
    )
}
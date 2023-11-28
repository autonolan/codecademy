import React from 'react';
import Track from './Track';
import AddButton from './AddButton';

export default function Tracklist(props) {
    console.log(props);
    return (
        <>
          <ul>
            {props.searchResults.map(track => {
                return (
                <>
                  <Track details={track} key={track.id}/>
                  <AddButton track={track} addTrack={props.addTrack} key={track.id}/>
                </>
                )
            })}
          </ul>
        </>
    )
}
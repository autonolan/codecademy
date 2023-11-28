import React from 'react';
import Track from './Track';

export default function Tracklist(props) {
    console.log(props);
    return (
        <>
          <ul>
            {props.searchResults.map(track => {
                return <Track details={track} key={track.id}/>
            })}
          </ul>
        </>
    )
}
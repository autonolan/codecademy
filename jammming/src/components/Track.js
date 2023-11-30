import React from 'react';

export default function Track(props) {
    console.log(props.details.artists);
    return (
        <div>
          <h4>{props.details.name}</h4>
          <h5>{props.details.artists ? props.details.artists[0].name : 'Unknown'}</h5>
          <h6>{props.details.album.name}</h6>
        </div>
    )
}
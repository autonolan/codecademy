import React from 'react';

export default function Track(props) {
    return (
        <>
          <h4>{props.details.name}</h4>
          <h5>{props.details.artist}</h5>
          <h6>{props.details.album}</h6>
        </>
    )
}
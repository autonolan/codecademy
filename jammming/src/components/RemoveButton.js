import React from 'react';

export default function RemoveButton(props) {
    const clickHandler = () => {
        props.removeTrack(props.track);
    }
    return <button onClick={clickHandler}>-</button>
}
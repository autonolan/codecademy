import React from 'react';

export default function AddButton(props) {
    const clickHandler = () => {
        props.addTrack(props.track);
    }
    return <button onClick={clickHandler}>+</button>
}
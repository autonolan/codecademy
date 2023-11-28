import React, {useState} from 'react';
import Tracklist from './Tracklist';

export default function SearchResults(props) {
    console.log(props);
    return (
        <Tracklist searchResults={props.searchResults} />
    )
}
import React from 'react';

export default function SearchBar(props) {
    return (
        <>
          <form onSubmit={props.handleSearch}>
            <input type="text" name="search" id="search" />
            <input type="submit" text="Search" />
          </form>
        </>
    )
}
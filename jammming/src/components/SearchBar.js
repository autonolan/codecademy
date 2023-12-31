import React from 'react';

export default function SearchBar(props) {
    return (
        <>
          <form onSubmit={props.handleSearch}>
            <input type="text" name="search" id="search" onChange={props.updateSearchTerm} value={props.searchTerm}/>
            <input type="submit" value="Search" />
          </form>
        </>
    )
}
import React from 'react';
import './../styles/searchBar.css';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchBar">
                <input type="text" placeholder="Search..."/>
                <span className="material-icons">
                    search
                </span>
            </div>
        );
    }
}

export default SearchBar;
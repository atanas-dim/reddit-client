import React from 'react';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResults } from '../../app/appSlice';
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './searchSlice';
// import { setCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Search = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const value = e.target.value;
        dispatch(setSearchTerm(value));
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            window.location.href = `/search/${searchTerm}`;
            dispatch(setSearchTerm(''));
        }
    }

    return (
        <div className="search-container">
            <BiSearch className="search-icon" />
            <input 
                autoComplete="off"
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                onKeyDown={onKeyDownHandler}
                placeholder="Search reddits" 
                aria-label="Search reddits" 
            />
            { searchTerm.length > 0 && (
                <button 
                    type="button"
                    onClick={onClearSearchTermHandler}
                    aria-label="Clear search button" 
                    className="clear-search-button" 
                >
                    <AiOutlineCloseCircle className="clear-search-icon" />
                </button>
            )}
        </div>
    )
}

export default Search;


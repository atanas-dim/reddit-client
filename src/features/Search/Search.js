import React from 'react';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './searchSlice';
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
        if (searchTerm.trim() === '') {
            return;
        } else if (e.keyCode === 13) {
            document.getElementById('search-btn').click();
            dispatch(setSearchTerm(''));
        }
    }

    return (
        <div className="search-outer-container">
            <div className="search-container">
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
            <Link to={`/search/${searchTerm}`} id="search-btn">
                <BiSearch className="search-btn" />
            </Link>
        </div>
    )
}

export default Search;


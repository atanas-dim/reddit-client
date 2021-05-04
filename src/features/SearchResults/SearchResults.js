import React, { useEffect } from 'react';
import './SearchResults.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResults, selectPosts, selectIsLoading } from '../../app/appSlice';
import { setCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';
import { setCurrentFilter } from '../Filters/filtersSlice';

const SearchResults = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const isLoading = useSelector(selectIsLoading);
    const currentSubreddit = match.params.id;

    useEffect(() => {
        dispatch(setCurrentFilter('hot'));
        dispatch(setCurrentSubreddit('searchresults'));
        dispatch(loadSearchResults(match.params.id));
        console.log('fetching search results posts');
    }, [dispatch, currentSubreddit]);

    return (
        <> 
            <div className="search-heading"> 
                    <h2>Search results for "{match.params.id}"</h2>
            </div>         
            { isLoading 
                ? <div>Loading...</div> : 
                    posts.map((post, index) => <Post key={index} post={post} postIndex={index} /> )
            }
        </>
    )
}

export default SearchResults;
import React, { useEffect } from 'react';
import './SearchResults.css';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import { AnimatedList } from 'react-animated-list';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResults, selectPosts, selectIsLoading } from '../../app/appSlice';
import { setCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';
import { setCurrentFilter } from '../Filters/filtersSlice';

const SearchResults = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const isLoading = useSelector(selectIsLoading);
    

    useEffect(() => {
        dispatch(setCurrentFilter('hot'));
        dispatch(setCurrentSubreddit('searchresults'));
        dispatch(loadSearchResults(match.params.id));
        console.log('fetching search results posts');
    }, [dispatch, match.params.id]);

    return (
        <> 
            <div className="search-heading"> 
                    <h2>Search results for "{match.params.id}"</h2>
            </div>         
            { isLoading 
                ? <AnimatedList><PostLoading/><PostLoading/><PostLoading/></AnimatedList>
                : posts.map((post, index) => <Post key={index} post={post} postIndex={index} /> )
            }
        </>
    )
}

export default SearchResults;
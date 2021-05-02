import React, { useEffect } from 'react';
import About from '../About/About';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditPosts ,selectPosts, selectIsLoading } from '../../app/appSlice';
import { loadSubredditAbout } from '../../app/appSlice';
import {  setCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';

const Subreddit = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const isLoading = useSelector(selectIsLoading);
    const currentSubreddit = match.params.id;
    const prefixedSubreddit = "r/" + currentSubreddit;

    useEffect(() => {
        dispatch(setCurrentSubreddit(prefixedSubreddit));
        dispatch(loadSubredditAbout(prefixedSubreddit));
        console.log('fetching about sub page');
        dispatch(loadSubredditPosts(prefixedSubreddit));
    }, [dispatch, prefixedSubreddit]);

    if (isLoading) {
        return (
          <div>Loading...</div>
        );
    }

    return (
        <>
            <About />
            <Filters />
            {posts.map((post, index) => <Post key={index} data={post.data} type="subreddit-post" /> )}
        </>
    )
}

export default Subreddit;
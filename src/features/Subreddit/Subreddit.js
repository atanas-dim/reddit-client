import React, { useEffect } from 'react';
import About from '../About/About';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditPosts ,selectPosts } from '../../app/appSlice';
import { loadSubredditAbout } from '../../app/appSlice';

const Subreddit = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const currentSubreddit = match.params.id;


    useEffect(() => {
        dispatch(loadSubredditAbout(currentSubreddit));
        console.log('fetching about sub page')
        dispatch(loadSubredditPosts(currentSubreddit));
    }, [dispatch, currentSubreddit]);


    return (
        <>
            <About />
            <Filters />
            {posts.map((post, index) => <Post key={index} data={post.data} type="subreddit-post" /> )}
        </>
    )
}

export default Subreddit;
import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditPosts ,selectPosts } from '../../app/appSlice';

const Subreddit = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const currentSubreddit = match.params.id;

    useEffect(() => {
        dispatch(loadSubredditPosts(currentSubreddit));
    }, [dispatch, currentSubreddit]);

    return (
        <>
            {/* <h1>r/{currentSubreddit}</h1> */}
            <Filters />
            {posts.map((post, index) => <Post key={index} data={post.data} type="subreddit-post" /> )}
        </>
    )
}

export default Subreddit;
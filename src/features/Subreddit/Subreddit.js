import React, { useEffect } from 'react';
import About from '../About/About';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubredditPosts ,selectPosts, selectIsLoading } from '../../app/appSlice';
import { loadSubredditAbout } from '../../app/appSlice';
import { selectCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';

const Subreddit = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const isLoading = useSelector(selectIsLoading);
    const currentSubreddit = useSelector(selectCurrentSubreddit); 

    useEffect(() => {
        dispatch(loadSubredditAbout(currentSubreddit));
        console.log('fetching about sub page')
        dispatch(loadSubredditPosts(currentSubreddit));
    }, [dispatch, currentSubreddit, match]);

    console.log(posts.length);

    if (isLoading) {
        return (
          <div>Loading...</div>
        );
    }

    return (
        <>
            {/* <About /> */}
            <Filters />
            {posts.map((post, index) => <Post key={index} data={post.data} type="subreddit-post" /> )}
        </>
    )
}

export default Subreddit;
import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomePosts, selectPosts, selectIsLoading } from '../../app/appSlice';
import { selectCurrentSubreddit, setCurrentSubreddit } from '../SubredditsAside/subredditsAsideSlice';

const Home = ({match}) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    const isLoading = useSelector(selectIsLoading);
    const currentSubreddit = match.params.id;

    useEffect(() => {
        dispatch(setCurrentSubreddit('/'));
        dispatch(loadHomePosts());
        console.log('fetching home posts')
    }, [dispatch, currentSubreddit]);

    console.log(posts.length);

    if (isLoading) {
        return (
          <div>Loading...</div>
        );
    }

    return (
        <>
            <Filters />           
            {posts.map((post, index) => <Post key={index} data={post.data} type="home-post" />)}
        </>
    )
}

export default Home;
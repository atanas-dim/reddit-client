import React, { useEffect } from 'react';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomePosts, selectPosts } from '../../app/appSlice';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); 
    // console.log(posts);

    useEffect(() => {
        dispatch(loadHomePosts());
    }, [dispatch]);

    return (
        <>
            {/* <h1>Home</h1> */}
            <Filters />           
           {posts.map((post, index) => <Post key={index} data={post.data} type="home-post" />)}
        </>
    )
}

export default Home;
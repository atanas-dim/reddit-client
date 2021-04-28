import React from 'react';
import './Home.css';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../app/appSlice';

const Home = () => {
    const posts = useSelector(selectPosts);

    return (
        <>
           {posts.map(() => <Post />)}
        </>
    )
}

export default Home;
import React from 'react';
import './Post.css';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

const Post = () => {

    const loadComments = () => {
        return (
            <>
                <Comment />
                <Comment />
            </>
        )
    }

    return (
        <Card className="post">
            
                <div className="post-details">
                    <span className="author-profile">
                    <IoPersonCircleOutline className="author-avatar" />
                        <div>
                            <span className="username">profilename </span>
                            posted:
                        </div>   
                    </span>
                    <span className="date">1 hour ago</span>
                </div>
                <div className="post-text">
                    <h3>The quick, brown fox jumps over a lazy dog</h3>
                </div>
                <div className="post-image">
                    <img src="https://miro.medium.com/max/12000/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg"></img>
                </div>
                <div className="comments-container">
                    <button 
                        className="comments-btn"
                        onClick={() => console.log('comments')}
                    >
                        <FaComments />16 comments
                    </button>
                    {loadComments()}
                </div>
                
        </Card>
    )
}

export default Post;
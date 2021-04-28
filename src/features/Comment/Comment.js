import React from 'react';
import './Comment.css';
import { IoPersonCircleOutline } from "react-icons/io5";

const Comment = () => {


    return (
        <div className="comment">
            <div className="avatar-container">
                <IoPersonCircleOutline className="comment-avatar" />
            </div>
            <div className="comment-contents">
                <div className="comment-details">
                    <span className="username">profilename</span>
                    <span className="date">1 hour ago</span>
                </div>

                <div className="comment-text">
                    <p>The quick, brown fox jumps over a lazy dog. 
                        DJs flock by when MTV ax quiz prog. 
                        Junk MTV quiz graced by fox whelps.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Comment;
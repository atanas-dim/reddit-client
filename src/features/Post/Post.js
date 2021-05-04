import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';
import { FaComments } from "react-icons/fa";
import timeToTimeAgo from '../../utils/timeToTimeAgo';
import { IoLogoReddit } from "react-icons/io5";
import { fetchSubredditAbout } from '../../api/reddit-api';
import { selectIsLoading, loadComments, setShowingComments, setCommentsNum } from '../../app/appSlice';

const Post = (props) => {
    const { post, postIndex } = props;
    const dispatch = useDispatch();
    const [subredditIcon, setSubredditIcon] = useState('');
    const isLoading = useSelector(selectIsLoading);
    const comments = post.comments.slice(0, post.comments.length - 1);
    const commentsNum = post.commentsNum;
    
    useEffect(() => {
        if (!isLoading) {
            fetchSubredditAbout(post.data.subreddit_name_prefixed).then(response => {
                setSubredditIcon(response.icon_img);
            });
        }
        return () => setSubredditIcon('');
    }, [post.data.subreddit_name_prefixed, isLoading])

    const handleLoadComments = () => {
        dispatch(setShowingComments({index: postIndex, showingComments: post.showingComments}));
        if (!post.showingComments) {
            dispatch(loadComments( {index: postIndex, permalink: post.data.permalink, showingComments: post.showingComments} ));
        }
    }

    const handleShowMore = (number) => {
        dispatch(setCommentsNum({index: postIndex, commentsNum: number}));
    }

    const createComments = (number) => {
        return (
            <>
                {comments.slice(0, number).map((comment, index) => <Comment key={index} comment={comment} />)}
            </>
        )
    }

    const createSubredditAvatar = (url) => {
        if (url) {
            return <img src={url} alt="avatar" className="subreddit-avatar" />
        } else {
            return <IoLogoReddit className="subreddit-avatar" />
        }
    }

    return (
        <Card className="post">
            
                <div className="post-details">
                    <span className="author-profile">
                        {createSubredditAvatar(subredditIcon)}
                        <div className="profile-names" >
                            <div><span className="subreddit-name">{post.data.subreddit_name_prefixed}</span></div>
                            <div><span className="username" >posted by {post.data.author}</span> </div>
                        </div>
                    </span>
                    <span className="date">{timeToTimeAgo(post.data.created_utc)}</span>
                </div>
                <div className="post-text">
                    <h3>{post.data.title}</h3>
                </div>
                { post.data.post_hint === 'image' &&
                    <div className="post-image">
                        <img src={post.data.url_overridden_by_dest} alt="media" ></img>   
                    </div>
                }
                <div className="comments-container">
                    <button 
                        className="comments-btn"
                        onClick={() => handleLoadComments()}
                    >
                        <FaComments />
                        {post.data.num_comments} comments
                    </button>
                    {(comments && post.showingComments ) && createComments(commentsNum)}
                    {(comments.length > 3 && post.showingComments ) && <button className="show-more-btn" 
                                                                               onClick={() => {
                                                                                    handleShowMore(commentsNum + 3);
                                                                               }} 
                                                                        >
                                                                                Show more comments
                                                                            </button> }
                </div>
                
        </Card>
    )
}

export default Post;
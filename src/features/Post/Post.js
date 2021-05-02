import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';
import { FaComments } from "react-icons/fa";
import timeToTimeAgo from '../../utils/timeToTimeAgo';
import { selectAbout } from '../../app/appSlice';
import { IoLogoReddit } from "react-icons/io5";
import { fetchSubredditAbout } from '../../api/reddit-api';

const Post = (props) => {
    const { data, type } = props;
    const dispatch = useDispatch();
    const about = useSelector(selectAbout);
    // console.log(data);
    const [subredditIcon, setSubredditIcon] = useState('');
  
    useEffect(() => {
            fetchSubredditAbout(data.subreddit_name_prefixed).then(response => {
                setSubredditIcon(response.icon_img);
                // console.log(data.subreddit_name_prefixed);
            });
    }, [data.subreddit_name_prefixed])


    const loadComments = () => {
        return (
            <>
                <Comment />
                <Comment />
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
                            <div><span className="subreddit-name">{data.subreddit_name_prefixed}</span></div>
                            <div><span className="username" >posted by {data.author}</span> </div>
                        </div>
                    </span>
                    <span className="date">{timeToTimeAgo(data.created_utc)}</span>
                </div>
                <div className="post-text">
                    <h3>{data.title}</h3>
                </div>
                { data.post_hint === 'image' &&
                    <div className="post-image">
                        <img src={data.url_overridden_by_dest} alt="media" ></img>   
                    </div>
                }
                <div className="comments-container">
                    <button 
                        className="comments-btn"
                        onClick={() => console.log('comments')}
                    >
                        <FaComments />{`${data.num_comments} comments`}
                    </button>
                    {loadComments()}
                </div>
                
        </Card>
    )
}

export default Post;
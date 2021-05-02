import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SubredditsAside.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, selectIsOpen, setIsOpen, setCurrentSubreddit, loadSubreddits, selectCurrentSubreddit } from './subredditsAsideSlice';
import Card from '../../components/Card/Card';
import { AiFillHome } from "react-icons/ai";
import { BiSubdirectoryRight } from "react-icons/bi";
import { IoLogoReddit } from "react-icons/io5";

const SubredditsAside = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const isOpen = useSelector(selectIsOpen);
    const icons = {
        home: <AiFillHome />,
        subreddits: <BiSubdirectoryRight />
    };
    
    // to rework
    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    const toggleSubreddits = () => {
        dispatch(setIsOpen(!isOpen))
        !isOpen && dispatch(loadSubreddits());
    }
 
    useEffect(() => {
        dispatch(setIsOpen(window.innerWidth >= 768));
        dispatch(loadSubreddits());
    }, [dispatch]);

    //to rework closes here

    const onClickHandler = (event, subreddit) => {
        console.log('this is ' + subreddit)
        dispatch(setCurrentSubreddit(subreddit));
    }

    const createSubredditButton = (subreddit) => {
        const subredditName = subreddit.display_name_prefixed;
        const subredditIcon = subreddit.icon_img;

        return (
            <Link to={`/${subredditName}`}  
                  onClick={(e) => onClickHandler(e,subredditName)} 
                  className={currentSubreddit === subredditName ? "subreddit-link selected" : "subreddit-link"}
                >
                { subredditIcon ? <img src={subredditIcon} /> : <IoLogoReddit /> }
                {subredditName}
            </Link>  
        )
    }

    return (
    
        <Card className="subreddits-card">
            <ul>
                <li> 
                    <ul id="categories-container">
                        <li id="home-link-container" >
                            <Link to="/" 
                                  className={currentSubreddit === 'home' ? "nav-link selected" : "nav-link"}
                                  onClick={(e) => onClickHandler(e, 'home')}
                            >
                                {icons.home}Home
                            </Link>
                        </li>
                        <li id="subreddits-link-container">
                            <Link to="#" 
                                  onClick={() => toggleSubreddits()} 
                                  className={(currentSubreddit !== 'home' && isOpen) ? "nav-link selected" : "nav-link"} 
                            >
                                {icons.subreddits}Subreddits
                            </Link>
                        </li>
                        
                    </ul>
                </li>

                {isOpen && 
                    <li>
                        <ul id="subreddits-container"> 
                            
                            {subreddits.filter((subreddit) => subreddit.display_name_prefixed !== 'r/Home').map((subreddit, index) => {
                                return (
                                
                                    <li key={subreddit + index}>
                                        {createSubredditButton(subreddit)}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                }

            </ul>
        </Card> 
    
    )
}

export default SubredditsAside;
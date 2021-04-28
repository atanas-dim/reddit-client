import React, { useEffect } from 'react';
import './Subreddits.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, selectCurrentSubreddit, setCurrentSubreddit, selectIsOpen, setIsOpen } from './subredditsSlice';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSubdirectoryRight } from "react-icons/bi";

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const isOpen = useSelector(selectIsOpen);
    
    const icons = {
        home: <AiFillHome />,
        subreddits: <BiSubdirectoryRight />,
        subreddit1: <IoPersonCircleOutline />,
        subreddit2: <IoPersonCircleOutline />,
        subreddit3: <IoPersonCircleOutline />,
        subreddit4: <IoPersonCircleOutline />,
        subreddit5: <IoPersonCircleOutline />,
    };

    useEffect(() => {
        dispatch(setIsOpen(window.innerWidth >= 768));
    }, []);

    const onClickHandler = (event, subreddit) => {
        event.preventDefault();
        dispatch(setCurrentSubreddit(subreddit));
    }

    const createSubredditButton = (subreddit) => {
        return (
            <Button 
                text={subreddit}
                icon={icons[subreddit]}
                className={'subreddit' + (subreddit === currentSubreddit ? ' selected' : '')}
                onClick={(event) => {onClickHandler(event, subreddit)}}
            />  
        )
    }

    return (
    
        <Card className="subreddits-card">
            <ul>
                <li> 
                    <ul id="categories-container">
                        <li>
                            <Button 
                                text={'Home'}
                                icon={icons['home']}
                                className={'category'}
                                onClick={() => console.log('placeholder')}
                            /> 
                        </li>
                        <li>
                            <Button 
                                text={'Subreddits'}
                                icon={icons['subreddits']}
                                className={'category'}
                                onClick={() => dispatch(setIsOpen(!isOpen)) }
                            /> 
                        </li>
                    </ul>
                </li>

                {isOpen && 
                    <li>
                        <ul id="subreddits-container"> 
                            
                            {subreddits.filter((subreddit) => subreddit !== 'home').map((subreddit, index) => {
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

export default Subreddits;
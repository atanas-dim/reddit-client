import React from 'react';
import './Header.css';
import ThemeSwitch from '../Theme/ThemeSwitch';
import Search from '../Search/Search';
import { FaReddit } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {


    return (
        <header>
            <div id="header-main-half">
                <a href="/" >
                    <div className="logo-container">
                        
                            <FaReddit className="logo" />
                            <h1>Reddit</h1>
                        
                    </div>
                </a>
                <Search className="search-component" />
            </div>
            <div id="theme-switch">
                <ThemeSwitch />
                <a href="https://github.com/atanas-dim/reddit-client" target="_blank" className="github-link">
                    <AiFillGithub />
                </a>
            </div>
            
            
        </header>
    )
}

export default Header;
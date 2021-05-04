import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../Theme/ThemeSwitch';
import Search from '../Search/Search';
import { FaReddit } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {


    return (
        <header>
            <div id="header-main-half">
                <div className="logo-container">
                    <FaReddit className="logo" />
                    <h1>Reddit</h1>
                </div>
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
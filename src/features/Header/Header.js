import React from 'react';
import './Header.css';
import ThemeSwitch from '../Theme/ThemeSwitch';
import Search from '../Search/Search';
import { FaReddit } from 'react-icons/fa';

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
            </div>
            
        </header>
    )
}

export default Header;
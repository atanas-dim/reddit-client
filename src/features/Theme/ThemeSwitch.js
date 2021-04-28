import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderSwitch from '../../components/SliderSwitch/SliderSwitch';
import { toggleTheme } from '../Theme/themeSlice';
import { selectTheme } from './themeSlice';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    
    const handleClick = () => {
        dispatch(toggleTheme());
    }

    return (
        <SliderSwitch onClick={handleClick} icon={ theme === 'light' ? <BiSun /> : <BiMoon/> } />
    )
}

export default ThemeSwitch;
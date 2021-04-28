import React from 'react';
import './Button.css';

const Button = (props) => {
    const {text, icon, onClick, className} = props;

    return (
        <button
            type="button"
            onClick={onClick}
            className={'nav-btn ' + className}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button;
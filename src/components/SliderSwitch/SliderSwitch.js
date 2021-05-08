import React from 'react';
import './SliderSwitch.css';

const SliderSwitch = (props) => {
    const {onClick, icon} = props;

    return (
        <label className="switch" >
            <input type="checkbox" onClick={onClick} role="button" />
            <span className="slider"><div>{icon}</div></span>
        </label>
    )
}

export default SliderSwitch;
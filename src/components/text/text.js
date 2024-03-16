import React from "react";
import './text.scss';

const Text = ({label}) => {
    return (
        <p className='text fade-anim'>
            {label}
        </p>
    )
}

export default Text;

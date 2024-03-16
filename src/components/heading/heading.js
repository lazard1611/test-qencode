import React from "react";
import './heading.scss';

const Heading = ({label, mainHead}) => {
    const content = mainHead ?
        <h1 className='heading fade-anim'>
            {label}
        </h1> :
        <h2 className='heading fade-anim'>
            {label}
        </h2>

    return content
}

export default Heading;

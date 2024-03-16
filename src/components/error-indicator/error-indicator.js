import React from "react";
import './error-indicator.scss';
import img from '../../img/404-pages.webp';

const ErrorInd = () => {
    return (
        <div className='error_indicate'>
            <img src={img} className="error_indicate__img" alt='404'/>
        </div>
    )
};

export default ErrorInd;

import React from "react";
import './success.scss';
import Heading from "../heading/heading";
import successImg from '../../img/success-image.svg';

const Success = ({label}) => {
    return (
        <div className="success">
            <Heading label={label}/>
            <picture className='success__pic'>
                <img src={successImg} alt="success image"/>
            </picture>
        </div>
    );
};

export default Success;

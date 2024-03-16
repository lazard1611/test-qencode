import React from "react";
import './button.scss';

const Button = ({label, type, onClickBtn, disabledState }) => {
    return (
        <button
            disabled={ disabledState }
            onClick={onClickBtn}
            className='btn'
            type={type}
            aria-label={label}
        >
            {label}
        </button>
    )
}

export default Button;

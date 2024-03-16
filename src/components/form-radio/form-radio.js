import React from "react";
import './form-radio.scss';

const FormRadio = ({dataRadio, setValue, register}) => {
    const {name, id} = dataRadio;

    return (
        <div className="form_radio__element">
            <input
                defaultChecked={id === 1}
                id={name}
                type='radio'
                className='form_radio__input'
                name='radio_1'
                register={ {...register }}
                onChange={() => setValue('radio', id)}
            />
            <label htmlFor={name} className='form_radio__label'>{name}</label>
        </div>
    )
}

export default FormRadio;

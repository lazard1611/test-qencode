import React, {useState}  from "react";
import './form-input.scss';

const FormInput = ({ field, register, errors, watchedFields }) => {

    return (
        <div className={`form_input__element ${watchedFields[field.id].trim() !== '' ? 'focus' : ''} ${errors[field.id] ? 'error' : ''}`}>
            <input
                id={field.id}
                type={field.type}
                className='form_input'
                {...register(field.id, field.validations)}
            />
            <label htmlFor={field.id} className='form_input__label'>{field.label}</label>
            {errors[field.id]?.message && <div className="form_input__error">{errors[field.id]?.message}</div>}
            {field.message && <div className="form_input__messages">{field.message}</div>}
        </div>
    );
};

export default FormInput;

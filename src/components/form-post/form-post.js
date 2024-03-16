import React, {useEffect, useState} from "react";
import Heading from "../heading/heading";
import FormInput from "../form-input/form-input";
import FormRadio from "../form-radio/form-radio";
import FormFile from "../form-file/form-file";
import Button from "../button/button";
import './form-post.scss';
import TestServices from "../../services/test-services";
import Spinner from '../../components/spiner/spinner';
import { useForm } from 'react-hook-form';
import dataForm from '../data-form/data-form';

const FormPost = () => {
    const [dataRadio, setDataRadio] = useState(null);
    const [preloader, setPreloader] = useState(true);
    const [token, setToken] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [inputFill, setInputFill] = useState(false);
    const [errorServerMsg, setErrorServerMsg] = useState(null);

    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            radio: '1',
            file: ''
        },
        mode: 'onSubmit',
    })


    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = form;

    const watchedFields = watch();

    useEffect(() => {
        const testServices = new TestServices();
        testServices
            .getPositionResource()
            .then((data) => setDataRadio(data))
            .then(() => setPreloader(false))
            .catch()

        testServices
            .getToken()
            .then((data) => setToken(data.token))
            .catch();
    }, []);

    const isFieldForm = (dataForm) => {
        let arr = [];
        dataForm.forEach(($input) => {
            const { id } = $input;
            arr.push(watch(id));
        })
        let isField = arr.every(value => value !== '');
        const file = watchedFields.file[0];
        setInputFill(isField && file);
    }

    useEffect(() => {
        isFieldForm(dataForm);
    }, [watchedFields])

    const radioBtns = preloader ? <Spinner/> : dataRadio.map((inputEl) => (
        <FormRadio
            key={inputEl.name}
            dataRadio={inputEl}
            control={control}
            setValue={setValue}
            register={ {...register('radio')} }
        />
    ))

    const onSubmitBtn = (data) => {
        const testServices = new TestServices();
        testServices
            .submitForm(data, token)
            .then((data) => {
                if (data.success) {
                    setIsPending(true);
                } else {
                    setErrorServerMsg(data.message);
                }
            })
            .catch((error) => {
                console.log('Обробка помилки', error);
            });
    }

    return (
        <section className='section form_post'>
            {!isPending && <div className="form_post__container">
                <Heading label='Working with POST request'/>
                <form className='form_post__wrap' onSubmit={handleSubmit(onSubmitBtn)} noValidate>
                    <div className="form_inputs__list">
                        {
                            dataForm.map((field, index) => (
                                <FormInput
                                    key={index} field={field}
                                    register={register}
                                    errors={errors}
                                    watchedFields={watchedFields}
                                />
                            ))
                        }
                    </div>

                    <div className="form_radio__wrap">
                        <div className="form_radio__title">Select your position</div>
                        <div className="form_radio__list">
                            { radioBtns }
                        </div>
                    </div>

                    <FormFile
                        register={register}
                        watchedFields={watchedFields}
                    />

                    <div className="form_post__btn_wrap">
                        {errorServerMsg && <p>{errorServerMsg}</p>}

                        {!isPending && <Button label='Sign up' type='submit' disabledState={!inputFill}/>}
                        {isPending && <Button label='Sign up' type='submit' disabledState={true}/>}
                    </div>
                </form>
            </div>}
        </section>
    )
}

export default FormPost;

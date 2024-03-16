import React, {useState, useEffect} from "react";
import './form-file.scss';

const FormFile = ({register, watchedFields}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const file = watchedFields.file;

        if (file) {
            const allowedFormats = ['jpeg', 'jpg'];
            const fileFormat = file[0].name.split('.').pop().toLowerCase();
            if (!allowedFormats.includes(fileFormat)) {
                setError("The photo format must be jpeg/jpg type.");
                return;
            }

            const maxSize = 5 * 1024 * 1024;
            if (file[0].size > maxSize) {
                setError("The photo size must not be greater than 5 Mb.");
                return;
            }

            setError(null);
            setSelectedFile(file[0]);
        }
    }, [watchedFields]);

    return (
        <div className={`form_file__element ${error ? 'error' : ''}`}>
            <input
                id='file'
                type='file'
                className='form_file__input'
                name='file'
                {...register('file')}
            />
            <label htmlFor='file' className='form_file__label'>Upload</label>
            <span className="form_file__name">{selectedFile ? selectedFile.name : 'Upload your photo'}</span>
            {error && <div className="form_file__error">{error}</div>}
        </div>
    )
}

export default FormFile;

const dataForm = [
    {
        label: 'Your name',
        type: 'text',
        id: 'username',
        validations: {
            minLength: { value: 2, message: 'The name must be at least 2 characters.' },
            maxLength: { value: 60, message: 'The name must be a maximum of 60 characters.' },
        },
    },
    {
        label: 'Email',
        type: 'email',
        id: 'email',
        validations: {
            pattern: {
                value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                message: 'The email must be a valid email address.',
            },
        },
    },
    {
        label: 'Phone',
        type: 'tel',
        id: 'phone',
        validations: {
            pattern: {
                value: /^[+]{0,1}380([0-9]{9})$/,
                message: 'The phone must match a Ukrainian number format.',
            },
        },
        message: '+38 (XXX) XXX - XX - XX',
    },
];

export default dataForm;

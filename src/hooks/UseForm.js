import { useState, useEffect } from 'react';

export const useForm = (initialFormData, setFormData) => {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', initialFormData);
            alert('Form submitted successfully!');
        }
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = initialFormData.name ? '' : 'Name is required.';
        tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(initialFormData.email) ? '' : 'Email is not valid.';
        tempErrors.age = initialFormData.age > 0 ? '' : 'Age must be greater than 0.';
        if (initialFormData.attendingWithGuest === 'Yes') {
            tempErrors.guestName = initialFormData.guestName ? '' : 'Guest Name is required when attending with a guest.';
        }

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    return {
        handleChange,
        handleSubmit,
        errors
    };
};

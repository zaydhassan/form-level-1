import React, { useState } from 'react';
import { useForm } from '../hooks/UseForm'; 

import '../styles/styles.css';



const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        attendingWithGuest: 'No',
        guestName: ''
    });
    const { handleChange, handleSubmit, errors } = useForm(formData, setFormData);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <p>{errors.age}</p>}
            </div>
            <div>
                <label>Are you attending with a guest?</label>
                <select name="attendingWithGuest" value={formData.attendingWithGuest} onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
            {formData.attendingWithGuest === 'Yes' && (
                <div>
                    <label>Guest Name:</label>
                    <input
                        type="text"
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleChange}
                    />
                    {errors.guestName && <p>{errors.guestName}</p>}
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default EventRegistrationForm;

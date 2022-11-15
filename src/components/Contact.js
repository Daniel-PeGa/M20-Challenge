import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';
require('dotenv').config()

function Contact() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
    const [formState, setFormState] = useState({
        name: '',
        email:'',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Is this really ur email??');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`An ${e.target.name} is needed to contact u!!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div>
            <h1>Contact Me!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">What's ur name?</label>
                    <input type="text" name="name" placeholder="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">And ur email?</label>
                    <input type="email" name="email" placeholder="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Got something to say?</label>
                    <textarea name="message" placeholder="name" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Send</button>
        </form>
        </div>
    );
}

export default Contact;
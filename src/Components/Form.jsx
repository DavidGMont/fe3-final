import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const useConfetti = window.confetti;

const Form = () => {
    const [contact, setContact] = useState({
        fullName: '',
        email: '',
    });
    const [isValid, setIsValid] = useState({
        fullNameIsValid: false,
        emailIsValid: false,
    });

    const fullNameRegExp = /[a-z áéíóúñ'-]{5,30}/g;
    const emailRegExp = /[\w.-]{2,30}@[\w.-]{2,30}\.\w{2,4}(?:.\w{2,4})?/g;

    const handleBlur = () => {
        setIsValid({
            ...isValid,
            fullNameIsValid: fullNameRegExp.test(contact.fullName.trim().toLowerCase()),
            emailIsValid: emailRegExp.test(contact.email.trim().toLowerCase()),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const defaults = {
            spread: 360,
            ticks: 100,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
        };
        function shoot() {
            // eslint-disable-next-line no-undef
            confetti({
                ...defaults,
                particleCount: 30,
                scalar: 1.2,
                shapes: ['circle', 'square'],
                colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
            });
            // eslint-disable-next-line no-undef
            confetti({
                ...defaults,
                particleCount: 20,
                scalar: 2,
                shapes: ['text'],
                shapeOptions: {
                    text: {
                        value: ['🦷', '😀', '✨'],
                    },
                },
            });
        }
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full name:</label>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    placeholder="E.g. Shakira Mebarak"
                    onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                    onBlur={handleBlur}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="E.g. hello@shakira.com"
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    onBlur={handleBlur}
                />
                <button type="submit" disabled={!(isValid.fullNameIsValid && isValid.emailIsValid)}>
                    Send
                </button>
            </form>
            <p>fullName: {isValid.fullName}</p>
            <p>email: {isValid.email}</p>
        </div>
    );
};

export default Form;

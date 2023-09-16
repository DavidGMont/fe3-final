import { useGlobalStates } from '../Context/Context.jsx';
import { shoot } from '../utils/shoot.js';
import Info from './Info.jsx';
import styles from '../styles/Form.module.scss';

(() => window.confetti)();
(() => window.tsParticles)();

const Form = () => {
    const { state, dispatch } = useGlobalStates();

    const fullNameRegExp = /^[a-z áéíóúñ'-]{5,30}$/g;
    const emailRegExp = /[\w.-]{2,30}@[\w.-]{2,30}\.\w{2,4}(?:.\w{2,4})?/g;

    const handleFullNameBlur = () => {
        dispatch({
            type: 'VALIDATE_CONTACT_FULL_NAME',
            payload: fullNameRegExp.test(state.contact.fullName.toLowerCase()),
        });
        dispatch({
            type: 'SHOW_CONTACT_FULL_NAME_FEEDBACK',
        });
    };

    const handleEmailBlur = () => {
        dispatch({
            type: 'VALIDATE_CONTACT_EMAIL',
            payload: emailRegExp.test(state.contact.email.toLowerCase()),
        });
        dispatch({
            type: 'SHOW_CONTACT_EMAIL_FEEDBACK',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'SHOW_SUBMIT_FEEDBACK',
            payload: true,
        });

        setTimeout(
            () =>
                dispatch({
                    type: 'SHOW_SUBMIT_FEEDBACK',
                    payload: false,
                }),
            15000
        );

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.contact}>
                <label htmlFor="full-name">Full name:</label>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    placeholder="E.g. Shakira Mebarak"
                    onChange={(e) =>
                        dispatch({ type: 'GET_CONTACT_FULL_NAME', payload: e.target.value })
                    }
                    onBlur={handleFullNameBlur}
                />
                {state.contact.showFullNameFeedback ? (
                    <Info
                        icon={'fa-solid fa-circle-xmark'}
                        feedback={
                            "The name you typed is invalid, please only use letters, hyphens (-) and apostrophes (')," +
                            ' it must have at least 5 characters.'
                        }
                        color={'#9b5151'}
                    />
                ) : null}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="E.g. hello@shakira.com"
                    onChange={(e) =>
                        dispatch({ type: 'GET_CONTACT_EMAIL', payload: e.target.value })
                    }
                    onBlur={handleEmailBlur}
                />
                {state.contact.showEmailFeedback ? (
                    <Info
                        icon={'fa-solid fa-circle-xmark'}
                        feedback={
                            'The email you typed is invalid, please only use letters (a-z), numbers (0-9), ' +
                            'hyphens (-), underscores (_) and dots (.)'
                        }
                        color={'#9b5151'}
                    />
                ) : null}
                <button
                    type="submit"
                    disabled={!(state.contact.isFullNameValid && state.contact.isEmailValid)}>
                    <i className="fa-regular fa-paper-plane"></i> Send
                </button>
                {state.contact.showSubmitFeedback ? (
                    <Info
                        icon={'fa-solid fa-circle-check'}
                        feedback={`Thank you, ${state.contact.fullName}! We will reach you out as soon as possible through email.`}
                        color={'#3e7937'}
                    />
                ) : null}
            </form>
        </>
    );
};

export default Form;

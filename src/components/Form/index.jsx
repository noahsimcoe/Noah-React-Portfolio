// useState is a react hook
import { useState } from 'react';

// importing helper function that checks if email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
    // create state variables for form fields
    // also set their starting values to being empty
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

    // based on inputType, we change either name/email/message
        if (inputType === 'contactName') {
            setContactName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // preventing default behavior of form submitting (page refresh)
        e.preventDefault();

        // checking to see if email is valid or if they provided a contact name
        if (!validateEmail(email) || !contactName) {
            setErrorMessage("Email or username is invalid.");
            // exits out of code statement so user can retry
            return;
        }
        if (!message) {
            setErrorMessage("The message field cannot be left blank");
            return;
        }
        alert(`Thanks for your message ${contactName}`);

        // assuming the message was submitted, you will reset your states
        setContactName('');
        setEmail('');
        setMessage('');
    };

    // rendering the form parts
    return (
        <div className="form-box">
            <h1>Hi there. Submit a message for me!</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="first and last name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email address"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message for me"
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
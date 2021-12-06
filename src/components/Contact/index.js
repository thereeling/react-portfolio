import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
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
        <div className="row">
        <h3 className='header'>Contact <span><img src='/favicon.ico' alt='aboutIcon'></img></span></h3>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m6 l6">
              <i className="material-icons prefix">account_circle</i>
              <input id="first_name" type="text" className="validate white-text" name='name' onBlur={handleChange}/>
              <label htmlFor="first_name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6 l6">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate white-text" name='email' onBlur={handleChange}/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
            <i className="material-icons prefix">edit</i>
            <textarea name='message' id="textarea1" className="materialize-textarea white-text" onBlur={handleChange}></textarea>
            <label htmlFor="textarea1">Message</label>
            </div>
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          )}
          <div className='row'>
            <button style={{backgroundColor: 'var(--red)'}}className="btn waves-effect waves-light black-text" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </div>
          
        </form>
      </div>
    )
}

export default Contact

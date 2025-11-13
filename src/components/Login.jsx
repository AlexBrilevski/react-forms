import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || enteredValues.email.trim() === '') {
      console.log('Email is invalid');
      return;
    }

    console.log(enteredValues);
    setEnteredValues({
      email: '',
      password: '',
    });
  }

  function handleFormReset(event) {
    event.preventDefault();
    setEnteredValues({
      email: '',
      password: '',
    });
  }

  function handleValueCnage(fieldId, value) {
    setEnteredValues(prevState => ({
      ...prevState,
      [fieldId]: value,
    }));

    setDidEdit(prevState => ({
      ...prevState,
      [fieldId]: false,
    }));
  }

  function handleInputBlur(fieldId) {
    setDidEdit(prevState => ({
      ...prevState,
      [fieldId]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={enteredValues.email}
            onChange={(e) => handleValueCnage('email', e.target.value)}
            onBlur={() => handleInputBlur('email')} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(e) => handleValueCnage('password', e.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleFormReset}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

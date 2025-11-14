import { useState } from "react";
import Input from "./Input.jsx";

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
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function resetForm() {
    setEnteredValues({
      email: '',
      password: '',
    });
    setDidEdit({
      email: false,
      password: false,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      emailIsInvalid ||
      enteredValues.email.trim() === '' ||
      passwordIsInvalid ||
      enteredValues.password.trim() === ''
    ) {
      console.log('Input data is invalid');
      return;
    }

    console.log(enteredValues);
    resetForm();
  }

  function handleFormReset(event) {
    event.preventDefault();
    resetForm();
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
        <Input
          label={'Email'}
          id={'email'}
          name={'email'}
          value={enteredValues.email}
          onChange={(e) => handleValueCnage('email', e.target.value)}
          onBlur={() => handleInputBlur('email')}
          error={emailIsInvalid && 'Please enter a valid email address.'}
        />

        <Input
          label={'Password'}
          id={'password'}
          name={'password'}
          type={'password'}
          value={enteredValues.password}
          onChange={(e) => handleValueCnage('password', e.target.value)}
          onBlur={() => handleInputBlur('password')}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleFormReset}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

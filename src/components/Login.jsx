import { useState } from "react";
import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from "./Input.jsx";

export default function Login() {
  const {
    value: email,
    handleChange: handleEmailChange,
    handleBlur: handlrEmailBlur,
    resetValue: resetEmail,
    hasError: emailIsInvalid,
  } = useInput('', isEmail);

  const {
    value: password,
    handleChange: handlePasswordChange,
    handleBlur: handlrPasswordBlur,
    resetValue: resetPassword,
    hasError: passwordIsInvalid,
  } = useInput('', (value) => hasMinLength(value, 6));

  function resetForm() {
    console.log('Form data reset');
    resetEmail();
    resetPassword();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !isNotEmpty(email) ||
      !isNotEmpty(password) ||
      emailIsInvalid ||
      passwordIsInvalid
    ) {
      console.log('Input data is invalid');
      return;
    }

    console.log({ email, password });
    resetForm();
  }

  function handleFormReset(event) {
    event.preventDefault();
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={'Email'}
          id={'email'}
          name={'email'}
          value={email}
          onChange={handleEmailChange}
          onBlur={handlrEmailBlur}
          error={emailIsInvalid && 'Please enter a valid email address.'}
        />

        <Input
          label={'Password'}
          id={'password'}
          name={'password'}
          type={'password'}
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlrPasswordBlur}
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

import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalit] = useState(false);
  const emailField = useRef();
  const passwordField = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailField.current.value;
    const password = passwordField.current.value;
    const emailIsValid = email.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalit(true);
      return;
    }

    setEmailIsInvalit(false);

    console.log({ email, password });

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            ref={emailField} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordField} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

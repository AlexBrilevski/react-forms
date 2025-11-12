import { useRef } from "react";

export default function Login() {
  const emailField = useRef();
  const passwordField = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailField.current.value;
    const password = passwordField.current.value;

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
            type="email"
            name="email"
            ref={emailField} />
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

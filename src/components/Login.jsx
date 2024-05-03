import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

// Login Component
function Login() {
  // JSX structure for rendering Login component
  return (
    <div className="account__wrapper">
      <div className="account">
        {/* Application logo */}
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Login form */}
        <div className="account__form">
          <h1>Login</h1>
          <form>
            {/* Email input field */}
            <div>
              <input
                className="input input__account"
                placeholder="Email address"
                type="email"
                autoComplete=""
              />
              {/* Error message for email validation */}
              <label className="input__account__error-label">
                <p>Can't be empty</p>
              </label>
            </div>

            {/* Password input field */}
            <div>
              <input
                className="input input__account"
                placeholder="Password"
                type="password"
                autoComplete=""
              />
              {/* Error message for password validation */}
              <label className="input__account__error-label">
                <p>Can't be empty</p>
              </label>
            </div>

            {/* Submit button */}
            <button className="btn btn__account" type="submit">
              Login to your account
            </button>
          </form>

          {/* Footer section with a link to sign up */}
          <div className="account__footer">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Login component
export default Login;

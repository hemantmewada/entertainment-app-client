import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

// Signup Component
function Signup() {
  // JSX structure for rendering Signup component
  return (
    <div className="account__wrapper">
      <div className="account">
        {/* Application logo */}
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Signup form */}
        <div className="account__form">
          <h1>Sign Up</h1>
          <form autoComplete="off">
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
                <p>Please enter a valid email</p>
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

            {/* Repeat Password input field */}
            <div>
              <input
                className="input input__account"
                placeholder="Repeat Password"
                type="password"
                autoComplete=""
              />
              {/* Error message for password confirmation */}
              <label className="input__account__error-label">
                <p>Can't be empty</p>
              </label>
            </div>

            {/* Submit button */}
            <button className="btn btn__account" type="submit">
              Create an account
            </button>
          </form>

          {/* Footer section with a link to login */}
          <div className="account__footer">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Signup component
export default Signup;

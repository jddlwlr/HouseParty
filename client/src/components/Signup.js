import React, { useState } from "react";

import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleFormSubmit}>
          <span>or use your email for registration</span>
          <input
            type="text"
            username="name"
            id="name"
            placeholder="userame"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Ssdf Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleFormSubmit}>
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button ahref="#profile">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Drink with Friends</h1>
            <p>
              <li>Create your own party</li>
              <li>Create your own rules</li>
              <li>From anywhere in the world</li>
              <li>With anyone ion the world</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

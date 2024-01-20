import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl } from "@mui/material";

import StyledButton from "./StyledButton";
import '../assets/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  // TODO: create handle submit function
  const handleSubmit = () => {
    return;
  }

  return (
    <>
      <section>
        <h1>Sign In</h1>
        <FormControl onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <StyledButton
            disabled={username === '' || pwd === '' ? true : false}
          >Sign In</StyledButton>
        </FormControl>
        <p>
          Need an account?<br />
          <span className="">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </section >
    </>
  )
}

export default Login
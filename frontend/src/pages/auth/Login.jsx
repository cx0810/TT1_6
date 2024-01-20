import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl } from "@mui/material";

import StyledButton from "../../components/StyledButton";
import '../../assets/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3030/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password: pwd })
    })
    const data = await res.json()
    console.log("data: ", data);

    // setLoggedIn(true)
    // console.log("logged in: ", loggedIn)
    return data;
  }

  return (
    <>
      <div className="login-register">
        <h1>Sign In</h1>
        <FormControl onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            className="login-input-text"
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="login-input-text"
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
          <Link to="/register">Sign Up</Link>
        </p>
      </div >
    </>
  )
}

export default Login
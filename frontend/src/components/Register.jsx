import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl } from "@mui/material";

import StyledButton from "./StyledButton";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    // TODO: create handle submit function
    const handleSubmit = () => {
        return;
    }

    useEffect(() => {
        const regexResult = USERNAME_REGEX.test(username);
        setValidUsername(regexResult);
    }, [username])

    useEffect(() => {
        const regexResult = PASSWORD_REGEX.test(pwd);
        setValidPwd(regexResult);
    }, [pwd]);

    return (
        <>
            <section>
                <h1>Sign Up</h1>
                <FormControl onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastname"
                        autoComplete="off"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                    />
                    <label htmlFor="username">Username:
                        <span className={validUsername ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validUsername || !username ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span></label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                        aria-invalid={validUsername ? "false" : "true"}
                        aria-describedby="uidnote"
                    />
                    <p id="uidnote" className={username && !validUsername ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <label htmlFor="password">Password:
                        <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span></label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                    />
                    <p id="pwdnote" className={pwd && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <StyledButton disabled={firstName === '' || lastName=== '' || !validUsername || !validPwd ? true : false}
                    >Sign Up</StyledButton>
                </FormControl>
                <p>
                    Have an existing account?<br />
                    <span className="">
                        <Link to="/login">Sign In</Link>
                    </span>
                </p>
            </section>
        </>
    )
}

export default Register
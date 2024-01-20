import { pool } from "./database.js";
import { comparePassword, hashPassword } from "./passwordUtils.js";
import { createJWT } from "./tokenUtils.js";

const executeQuery = async (query, params) => {
  const [results] = await pool.query(query, params);
  return results;
};

export const register = async (req, res) => {
  try {
    req.body.password = req.body.password;
    const { username, first_name, last_name, password } = req.body;
    await executeQuery(
      "INSERT INTO user (username, first_name, last_name, password) VALUES (?, ?, ?, ?)",
      [username, first_name, last_name, password]
    );
    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [user] = await executeQuery("SELECT * FROM user WHERE username = ?", [
      username,
    ]);

    if (user) {
      // User exists, compare passwords
      if (comparePassword(password, user.password)) {
        const token = createJWT({ username: user.username });
        const oneDay = 1000 * 60 * 60 * 24;
        res.cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + oneDay),
          secure: process.env.NODE_ENV === "production",
        });
        res.status(200).send("Login successful.");
      } else {
        res.status(401).send("Invalid credentials.");
      }
    } else {
      // User not found
      res.status(401).send("User not found or invalid credentials.");
    }
  } catch (error) {
    res.status(500).send("Error during login: " + error.message);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0), // Set it to a past date to expire it immediately
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).send("Logout successful.");
  } catch (error) {
    res.status(500).send("Error during logout: " + error.message);
  }
};

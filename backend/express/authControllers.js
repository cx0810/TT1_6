import { pool } from "../database.js";
import { comparePassword, hashPassword } from "../passwordUtils.js";
import { createJWT } from "../tokenUtils.js";

const executeQuery = async (query, params) => {
  const [results] = await pool.query(query, params);
  return results;
};

export const register = async (req, res) => {};

export const login = async (req, res) => {};

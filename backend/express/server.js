import express from "express";
import * as dotenv from "dotenv";
import { pool } from "../express/database.js";
//import authRouter from "./routes/authRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3030;

const app = express();
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

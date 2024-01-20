import express from "express";
import * as dotenv from "dotenv";
//import authRouter from "./routes/authRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3030;

const app = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());
//app.use("/api/user", authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

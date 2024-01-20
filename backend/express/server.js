import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./authRouter.js";

dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use("/api/v1/user", authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

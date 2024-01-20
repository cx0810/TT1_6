import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./authRouter.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();
// Enable CORS for all routes and origins
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/v1/user", authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

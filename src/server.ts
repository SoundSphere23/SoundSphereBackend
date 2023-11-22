import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes";
import { jwtCheckMiddleware } from "./middlewares/jwtCheck";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", jwtCheckMiddleware, userRoutes);

export default app;

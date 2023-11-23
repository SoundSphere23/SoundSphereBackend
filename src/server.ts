import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes";
import { jwtCheckMiddleware } from "./middlewares/jwtCheck";
import songRoutes from "./routes/song.routes";
import genreRoutes from "./routes/genre.routes";
import artistRoutes from "./routes/artist.routes";
import playlistRoutes from "./routes/playlist.routes";

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// app.use("/user", jwtCheckMiddleware, userRoutes);
app.use("/user", userRoutes);
app.use("/song", songRoutes);
app.use("/genre", genreRoutes);
app.use("/artist", artistRoutes);
app.use("/playlist", playlistRoutes)

export default app;

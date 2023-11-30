import { Router } from "express";
import {
  createSong,
  deleteSongById,
  getAllSongs,
  getSongById,
  getPublicSongs,
  getSongsByUserId,
  updateSongById,
} from "../controllers/song.controllers";

const songRoutes = Router();

songRoutes.get("/", getAllSongs)
songRoutes.get("/public", getPublicSongs);
songRoutes.get('/user/:userId', getSongsByUserId)
songRoutes.post('/:userId', createSong)
songRoutes.delete('/:songId', deleteSongById)
songRoutes.patch('/:songId', updateSongById)
songRoutes.get('/:songId', getSongById)

export default songRoutes;

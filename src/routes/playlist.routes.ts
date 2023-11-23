import { Router } from 'express'
import { createPlaylist, deletePlaylist, getAllPlaylist, getPlaylistById, getPlaylistsByUserId, updatePlaylist } from '../controllers/playlist.controllers'

const playlistRoutes = Router()

playlistRoutes.get("/", getAllPlaylist)
playlistRoutes.get("/:playlistId", getPlaylistById)
playlistRoutes.post("/:userId", createPlaylist)
playlistRoutes.patch("/:playlistId", updatePlaylist)
playlistRoutes.delete("/:playlistId", deletePlaylist)
playlistRoutes.get("/user/:userId", getPlaylistsByUserId)


export default playlistRoutes
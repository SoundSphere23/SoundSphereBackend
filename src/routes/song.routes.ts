import { Router } from 'express'
import { createSong, deleteSongById, getAllSongs, getSongById, getSongsByUserId, getSongsPublic, updateSongById } from '../controllers/song.controllers'


const songRoutes = Router()

songRoutes.get("/", getAllSongs)
songRoutes.post('/:userId', createSong)
songRoutes.delete('/:songId', deleteSongById)
songRoutes.patch('/:songId', updateSongById)
songRoutes.get('/:songId', getSongById)
songRoutes.get('/user/:userId', getSongsByUserId)
songRoutes.get('/public', getSongsPublic)
export default songRoutes
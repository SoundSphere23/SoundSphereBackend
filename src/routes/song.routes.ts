import { Router } from 'express'
import { createSong, deleteSongById, getSongById, getSongsByUserId, updateSongById } from '../controllers/song.controllers'


const songRoutes = Router()

songRoutes.post('/:userId', createSong)
songRoutes.delete('/:songId', deleteSongById)
songRoutes.patch('/:songId', updateSongById)
songRoutes.get('/:songId', getSongById)
songRoutes.get('/user/:userId', getSongsByUserId)

export default songRoutes
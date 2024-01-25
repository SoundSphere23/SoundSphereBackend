import { Router } from 'express'
import { createArtist, deleteArtist, getAllArtists, getArtistById, updateArtist } from '../controllers/artist.controllers'


const artistRoutes = Router()

artistRoutes.get("/", getAllArtists)
artistRoutes.get("/getArtistById", getArtistById)
artistRoutes.post("/", createArtist)
artistRoutes.patch("/:artistId", updateArtist)
artistRoutes.delete("/:artistId", deleteArtist)


export default artistRoutes
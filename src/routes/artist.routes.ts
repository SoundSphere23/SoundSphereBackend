import { Router } from 'express'
import { createArtist, deleteArtist, getAlbumsByArtist, getAllArtists, getArtistById, getSongsByArtist, updateArtist } from '../controllers/artist.controllers'


const artistRoutes = Router()

artistRoutes.get("/", getAllArtists)
artistRoutes.get("/:artistId", getArtistById)
artistRoutes.post("/", createArtist)
artistRoutes.patch("/:artistId", updateArtist)
artistRoutes.delete("/:artistId", deleteArtist)
artistRoutes.get("/:artistId/songs", getSongsByArtist )
artistRoutes.get("/:artistId/albums", getAlbumsByArtist)


export default artistRoutes
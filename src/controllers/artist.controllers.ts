import { Response, Request } from "express";
import  prismaClient  from "../db/client";

export const getArtistById = async (req: Request, res: Response) => {
    const { artistId } = req.params
    try {
        const artist = await prismaClient.artist.findUnique({
            where: { id: artistId }
        })
        res.status(200).json(artist)
    } catch (error) {
        res.status(500).json({ error, message: "Can get genres" })
    }
}

export const createArtist = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        if (!name) throw new Error("Missing fields");

        const newArtist = await prismaClient.artist.create({ data: { name } })

        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params
    const { name} = req.body
    try {
        const user = await prismaClient.artist.update({
            where: { id: artistId },
            data: { name: name },
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params

    try {

        await prismaClient.artist.delete({
            where: { id: artistId },
        })
        res.status(204).send("Genre deleted")
    } catch (error) {
        res.status(500).json(error)

    }
}

export const getAllArtists = async (req: Request, res: Response) => {
    try {
        const artist = await prismaClient.artist.findMany({})
        res.status(200).json(artist)
    } catch (error) {
        res.status(500).json(error)
    }
}
import { Response, Request } from "express";
import  prismaClient  from "../db/client";

export const getArtistById = async (req: Request, res: Response) => {
    const { artistId } = req.body
    try {
        const artist = await prismaClient.artist.findUnique({
            where: { id: artistId }
        })
        res.status(200).json(artist)
    } catch (error) {
        res.status(500).json({ error, message: "Can't get genres" })
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
    const page = parseInt(req.query.page as string) || 0;
    const pageSize = 23;

    try {
        const artists = await prismaClient.artist.findMany({
            take: pageSize,
            skip: page * pageSize,
            select: {
                id: true,
                name: true,
                thumbnail: true,
                Song: {
                    take: 10, 
                    include: {
                        Album: true, 
                        
                    },
                },
            },
        });
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json(error);
    }
};


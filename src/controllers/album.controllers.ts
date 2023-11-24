import { Response, Request } from "express";
import { prismaClient } from "../db/client";

export const getAlbumById = async (req: Request, res: Response) => {
    const { albumId } = req.params
    try {
        const album = await prismaClient.album.findUnique({
            where: { id: albumId }
        })
        res.status(200).json(album)
    } catch (error) {
        res.status(500).json({ error, message: "Can get album" })
    }
}

export const createAlbum = async (req: Request, res: Response) => {
    const { name, thumbnail, artistId, genreId } = req.body;
    const { userId } = req.params;

    try {
        if (!name || !thumbnail || !artistId || !genreId) throw new Error("Missing fields");

        const newAlbum = await prismaClient.album.create({
            data: {
                name,
                thumbnail,
                UserCreator: { connect: { id: userId } },
                Artist: {connect: {id:artistId}},
                Genre: {connect: {id:genreId}}
            }
        })

        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateAlbumById = async (req: Request, res: Response) => {
    const { albumId } = req.params
    const { name, thumbnail, userCreatorId, artistId, genreId } = req.body
    try {
        const user = await prismaClient.album.update({
            where: { id: albumId },
            data: { name: name, thumbnail: thumbnail, userCreatorId: userCreatorId, artistId: artistId, genreId: genreId },
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteAlbumById = async (req: Request, res: Response) => {
    const { albumId } = req.params

    try {

        await prismaClient.album.delete({
            where: { id: albumId },
        })
        res.status(204).send("Album deleted")
    } catch (error) {
        res.status(500).json(error)

    }
}

export const getAllAlbums = async (req: Request, res: Response) => {
    try {
        const albums = await prismaClient.album.findMany({})
        res.status(200).json(albums)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAlbumByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const albums = await prismaClient.album.findMany({
            where: {
                userCreatorId: userId,
            },
        });

        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json(error);
    }
};
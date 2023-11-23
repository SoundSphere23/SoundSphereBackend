import { Response, Request } from "express";
import { prismaClient } from "../db/client";
import { error } from "console";

export const getPlaylistById = async (req: Request, res: Response) => {
    const { playlistId } = req.params
    try {
        const playlist = await prismaClient.playlist.findUnique({
            where: { id: playlistId }
        })
        res.status(200).json(playlist)
    } catch (error) {
        res.status(500).json({ error, message: "Can get genres" })
    }
}

export const createPlaylist = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { name } = req.body;

    try {
        if (!name) throw new Error("Missing fields");

        const newplaylist = await prismaClient.playlist.create({
            data: {
                name,
                UserCreator: { connect: { id: userId } }
            }
        })

        res.status(201).json(newplaylist);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params
    const { name } = req.body;

    try {
        if (!name) throw new Error("Missing fields");

        const newplaylist = await prismaClient.playlist.update({
            where: {
                id: playlistId
            },
            data: { name }
        })

        res.status(201).json(newplaylist);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params

    try {

        await prismaClient.playlist.delete({
            where: { id: playlistId },
        })
        res.status(204).send("Playlist deleted")
    } catch (error) {
        res.status(500).json(error)

    }
}

export const getAllPlaylist = async (req: Request, res: Response) => {
    try {
        const playlist = await prismaClient.playlist.findMany({})
        res.status(200).json(playlist)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPlaylistsByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;
    console.log(userId)

    try {
        const playlists = await prismaClient.playlist.findMany({
            where: {
                userCreatorId: userId,
            },
        });

        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json(error);
    }
};

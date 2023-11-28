import { Response, Request } from "express";
import { prismaClient } from "../db/client";

export const getAllSongs = async (req: Request, res: Response) => {
  try {
    const song = await prismaClient.song.findMany({});
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSongById = async (req: Request, res: Response) => {
  const { songId } = req.params;

  try {
    const songs = await prismaClient.song.findUnique({
      where: {
        id: songId,
      },
    });

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createSong = async (req: Request, res: Response) => {
  const {
    name,
    url,
    duration,
    rating,
    thumbnail,
    reproductions,
    isPublic,
    likedById,
    albumId,
    genreId,
    artistId,
    playlistId,
  } = req.body;
  const { userId } = req.params;

  try {
    if (!name || !url || !thumbnail || !genreId)
      throw new Error("Missing fields");

    const newSong = await prismaClient.song.create({
      data: {
        name,
        url,
        // duration,
        // rating,
        thumbnail,
        // reproductions,
        isPublic,
        UserCreator: { connect: { id: userId } },
        // Album: { connect: { id: albumId } },
        Genre: { connect: { id: genreId } },
        // Artist: {
        //     connect: artistId.map((artistId: string) => ({
        //         id: artistId
        //     }))
        // }
        // Playlist: { connect: { id: playlistId } },
        // UserLike: { connect: { id: likedById } }
      },
    });
    res.status(201).json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const deleteSongById = async (req: Request, res: Response) => {
  const { songId } = req.params;

  try {
    const deletedSong = await prismaClient.song.delete({
      where: {
        id: songId,
      },
    });
    res.status(204).send("Song deleted: " + deletedSong);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateSongById = async (req: Request, res: Response) => {
  const { songId } = req.params;
  const { name } = req.body;

  try {
    const updatedSong = await prismaClient.song.update({
      where: {
        id: songId,
      },
      data: {
        name,
      }, //To do agregar resto de propiedades
    });
    res.status(204).send("Song deleted: " + updatedSong);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSongsByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const songs = await prismaClient.song.findMany({
      where: {
        userCreatorId: userId,
      },
    });

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json(error);
  }
};

/*To do: getSongsByUserId, getSongByGenre, getSongByAlbum, getSongbyPlaylist, getFavouritesSongsByUser, getSongsbyArtists */
export const getSongsPublic = async (req: Request, res: Response) => {
  try {
    const song = await prismaClient.song.findMany({
      where: {
        isPublic: true,
      },
    });
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json(error);
  }
};

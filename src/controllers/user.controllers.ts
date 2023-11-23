import { Response, Request } from "express";
import { prismaClient } from '../db/client'


// CONSEGUIR TODOS LOS USUARIOS
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prismaClient.user.findMany({});
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

//BUSCAR USUARIO Y SI NO EXISTE CREARLOS

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        let user = await prismaClient.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
    
            const userId = user.id;
            return res.status(200).json({ userId });
        } if(!user) {
           
            user = await prismaClient.user.create({
                data: { name, email }
            });
            return res.status(201).json(user);
        }
    } catch (error) {
        console.error('Error creando/buscando usuario:', error);
        res.status(500).json({ error: 'Error al buscar/crear el usuario' });
    } finally {
        await prismaClient.$disconnect();
    }
};
import { Response, Request } from "express";
import prismaClient from "../db/client";

export const fetchAllUsersFromDB = async () => {
  const users = await prismaClient.user.findMany({});
  return users
}
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = fetchAllUsersFromDB()
    res.status(201).json(users);
    return users
  return users
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can't load users" });
  }
};





export const fetchFindUser = async (email: string) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });
  return user
}
export const fetchCreateUser = async (email: string, name: string) => {
 const user = await prismaClient.user.create({
    data: { name, email },
  });
  return user
}
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    let user = await fetchFindUser(email)

    if (user) {
      const userId = user.id;
      return res.status(200).json({ userId });
    }
    if (!user) {
      user = await fetchCreateUser(email, name)
      return res.status(201).json(user);
    }
  } catch (error) {
    console.error("Error creando/buscando usuario:", error);
    res.status(500).json({ error: "Error al buscar/crear el usuario" });
  } finally {
    await prismaClient.$disconnect();
  }
};




export const userUpdateDataController = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return res.status(401).send({ errors: ["Usuario no existente"] });
    }

    const updatedUser = await prismaClient.user.update({
      where: {
        email: existingUser.email,
      },
      data: {
        name,
      },
    });

    return res.send({ log: ["Usuario actualizado"] });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).send({ errors: ["Error al actualizar usuario"] });
  } finally {
    await prismaClient.$disconnect();
  }
};


export default userUpdateDataController;

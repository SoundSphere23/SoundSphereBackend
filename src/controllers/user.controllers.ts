import { Response, Request } from "express";
import { prismaClient } from "../db/client";

// ejemplos de función => controller
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("init get all users");
    const users = await prismaClient.user.findMany({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = await prismaClient.user.create({ data: { name, email } });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json(error);
  }
};

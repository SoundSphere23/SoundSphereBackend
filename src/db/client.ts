import { PrismaClient as MongoClient, Prisma } from "../../prisma/generated/mongodb_client";
import { DefaultArgs } from "../../prisma/generated/mongodb_client/runtime/library";

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const DATA_SOURCE = process.env.DATA_SOURCE ?? "mongo"

export const mongoClient:ClientMongo = new MongoClient();

export let prismaClient=mongoClient



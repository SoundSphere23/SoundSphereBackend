import { PrismaClient } from "@prisma/client";
import { beforeEach } from "vitest";
import {mockReset,mockDeep } from 'vitest-mock-extended'

beforeEach(() => {
    mockReset(prismaClient)
})


const prismaClient = mockDeep<PrismaClient>()

export default prismaClient



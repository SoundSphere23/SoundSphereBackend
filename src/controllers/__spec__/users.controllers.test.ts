import { describe, test, expect, vi, afterEach, beforeEach } from "vitest";
import { fetchAllUsersFromDB, getAllUsers } from '../user.controllers'
import prismaClient from "../../db/__mocks__/client";
import { User } from "@prisma/client";

vi.mock('../../db/client')

const mockUsers: User[] = [{
    id: "1",
    name: "Chanchito",
    email: "test@test.com",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    id: "2",
    name: "midu",
    email: "midu@test.com",
    createdAt: new Date(),
    updatedAt: new Date(),
},
]


// beforeEach(() => { })
// afterEach(async () => {
//     vi.clearAllMocks() // testing data after each test run
// })
global.fetch = vi.fn()

function createFetchResponse(data: User[]) {
    return { json: () => new Promise((resolve) => resolve(data)) }
  }

describe('fetchAllUsersFromDB', () => {
    test('should return correct payload', async () => {

        prismaClient.user.findMany.mockResolvedValue(mockUsers)

        const users = await fetchAllUsersFromDB()
        expect(users).toHaveLength(2)
    })

})

describe("getAllUsers", () => {

    test("makes a GET request to fetch all users and returns the result", () => {
        global.fetch = () =>  Promise.resolve<any>({
            status: 200,
            json: () => Promise.resolve(mockUsers)
        }) 
       

        const users = getAllUsers
        expect(users).toHaveLength(2)

    })

    test("makes a GET request to fetch all users and returns error 500", async () => {
        global.fetch = () =>  Promise.resolve<any>({
            status: 500,
            json: () => Promise.resolve()
        }) 
       

        const users =  getAllUsers
        console.log("get all users", users)
        expect(users).toHaveLength(3)

    })




})


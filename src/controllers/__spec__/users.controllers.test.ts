import { describe, test, expect, vi, assert, beforeEach } from "vitest";
import { fetchAllUsersFromDB, fetchFindUser, fetchCreateUser, getAllUsers } from '../user.controllers'
import prismaClient from "../../db/__mocks__/client";
import { User } from "@prisma/client";

import {mockReset,mockDeep } from 'vitest-mock-extended'


vi.mock('../../db/client')
beforeEach(() => {
  vi.resetModules()
})
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
}
]

const mockNewUser: User = {
    id: "1",
    name: "Chanchito",
    email: "test@test.com",
    createdAt: new Date(),
    updatedAt: new Date(),
}

describe('fetchAllUsersFromDB', () => {
    test('should return correct payload', async () => {

        prismaClient.user.findMany.mockResolvedValue(mockUsers)

        const users = await fetchAllUsersFromDB()
        expect(users).toHaveLength(2)
    })
})


describe('create user fetch calls', () => {
    test('should find user logged on db', async () => {
        prismaClient.user.findUnique.mockResolvedValue(mockNewUser)

        const newUser = await fetchFindUser(mockNewUser.email)
        expect(newUser).not.toBeNull()
        expect(newUser?.email).toMatchObject(mockNewUser.email)
    })
    test('should NOT find user logged on db', async () => {
        prismaClient.user.findUnique.mockResolvedValue(null)

        const newUser = await fetchFindUser(mockNewUser.email)
        expect(newUser).toBeNull()
        expect(newUser?.name).not.toMatchObject(mockNewUser.name)
    })
})

// Mocking Prisma for testing
vi.mock('"../../db/__mocks__/client"', () => ({
  prismaClient: {
    user: {
      create: vi.fn(),
    },
  },
}));

// Your actual test
describe('fetchCreateUser', () => {
  test('creates a user', async () => {
    // Arrange
    const email = 'test@example.com';
    const name = 'Test User';

    // Mock the Prisma create method
    (prismaClient.user.create).mockResolvedValueOnce(mockNewUser);

    // Act
    const result = await fetchCreateUser(email, name);

    // Assert
    assert.equal(result, mockNewUser, 'The returned user should match the expected user');
    expect(prismaClient.user.create).toHaveBeenCalledWith({
      data: { name, email },
    });
  });
});






// Mock the fetchAllUsersFromDB function
const mockFetchAllUsersFromDB = vi.fn<User[]>(() => mockUsers);

vi.mock('../user.controller', () => ({
  fetchAllUsersFromDB: mockFetchAllUsersFromDB,
}));

describe('get all users test', () => {  

  test("Should return status 201 and list of users", async () => {

    const mockRequest: any = {};
    const mockResponse: any = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    
  // Call the function with the mock objects
  await getAllUsers(mockRequest, mockResponse);

  // Perform assertions
  expect(mockResponse.status).toHaveBeenCalledWith(201);
  // expect(mockResponse.json).toHaveBeenCalledWith(mockUsers);


  })

  test.todo('should handle errors', async () => {
    // Mock the Request and Response objects
    const mockRequest: any = {};
    const mockResponse: any = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
  
    // Mock the fetchAllUsersFromDB function to throw an error
    mockFetchAllUsersFromDB.mockImplementation(() => {
      throw new Error('Mock error');
    });
    mockResponse.status.mockImplementation(() => mockResponse);

  
    // Call the function with the mock objects
    await getAllUsers(mockRequest, mockResponse);
  
    // Perform assertions
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    // expect(mockResponse.json).toHaveBeenCalledWith(mockUsers);
  });

})
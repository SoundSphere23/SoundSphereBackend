import {Router, Request, Response} from 'express'
import { createUser, getAllUsers, userUpdateDataController } from '../controllers/user.controllers'

const userRoutes = Router()

userRoutes.get('/', getAllUsers)
userRoutes.post('/', createUser)
userRoutes.patch('/', userUpdateDataController)

export default userRoutes
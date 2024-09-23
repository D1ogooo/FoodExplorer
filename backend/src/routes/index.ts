import express from 'express'
import { UsersController } from '../controllers/UsersController'
const route = express.Router()
const Users = new UsersController()

route.post('/users/session', Users.auth) // rota de login
route.post('/users/create', Users.create) // rota de registro

export { route }
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import type { Response, Request } from "express";
import type { AuthUserRequest } from "../../@types/types";
import { prisma } from '../lib/prisma'
import { jwtConfig } from '../configs/auth';

class UsersController {
  async create(req: Request<AuthUserRequest>, res: Response) {
    const { name, email, password } = req.body;
  
    const userExists = await prisma.User.findUnique({
      where: { email },
    });
  
    if (userExists) {
      return res.status(401).json({ error: "O email declarado já se encontra em uso" });
    }
    
    const encryptedPassword = await bcrypt.hash(password, 8);
  
    const createUser = await prisma.User.create({
      data: { name, email, password: encryptedPassword }
    });
  
    res.status(200).json({ createUser });
  }

 async auth(req: Request<AuthUserRequest>, res: Response) {
  const { email, password } = req.body
  const emailExist = await prisma.User.findUnique({
   where: { email },
  })

  const correctPassword = bcrypt.compare(password, emailExist.password)
   if(!correctPassword) {
    res.status(401).json({ "error": "Senha invalida declarada" })
   }

   const token = jwt.sign({ role: emailExist.role },jwtConfig.secret ,{ expiresIn: jwtConfig.expiresIn })
   const user = {
    email: emailExist.email,
    id: emailExist.id
   }
   res.status(200).json({ token, user })
 }
}

export { UsersController }
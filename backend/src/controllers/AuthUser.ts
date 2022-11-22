import { Request, Response } from "express";
import prisma from "../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


export default class AuthUser{
  async handle(req: Request, res: Response){
    try{
      const {username, password} = req.body;

      const user = await prisma.user.findUnique({
        where:{
          username: username
        }
      })
      if(user === null){
        return res.status(404).json({"error": "Esse usuário não existe"});
      }

      if(!(await compare(password, user.password))){
        return res.status(422).json({"error": "senha inválida"});
      }


      try{
        const secrect = process.env.SECRET;

        if(secrect){
          const token = sign({
            id: user.id
          }, secrect, { expiresIn: (60 * 60)*24 });

          return res.status(201).json({
            "message": "Autenticação realidada com sucesso",
            "token": token
          })
        }else{
          throw new Error("security variable is not available");
        }

      }catch{
        return res.status(422).json(`ERROR`);
      }
    }catch(error){
      return res.status(422).json({"error": `Error with server`});
    }

  }
}
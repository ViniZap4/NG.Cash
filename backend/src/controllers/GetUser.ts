import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetUser{
  async handle(req: Request, res: Response){
    try{
      const idUser = req.params.id;

      const user = await prisma.user.findFirstOrThrow({
        select:{
          username: true,
          password:false,
          Account: false,
        },
        where:{
          id: idUser,
        }
      })
  
      return res.json(user)
      
    } catch (error){
      res.json(error);
    }

  }
}
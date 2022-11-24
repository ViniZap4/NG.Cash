import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetUser{
  async handle(req: Request, res: Response){
    try{
      const id = req.params.id;

      const user = await prisma.user.findUnique({
        select:{
          username: true,
          password:false,
          Account: false,
        },
        where:{
          id: id
        }
      })
      if(user === null){

        const accountUser = await prisma.account.findUnique({
          select:{
            userId: true
          },
          where:{
            id: id
          }
        })

        if(accountUser === null){
          return res.status(404).json({"error": "Esse usuário não existe", "username": null});
        }

        const user = await prisma.user.findUnique({
          select:{
            username: true,
            password:false,
            Account: false,
          },
          where:{
            id: accountUser.userId
          }
        })

        return res.json(user)
      }
      return res.json(user)
    } catch (error){
      res.json(error);
    }

  }
}
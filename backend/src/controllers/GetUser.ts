import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetUser{
  async handle(req: Request, res: Response){
    try{
      const username = req.params.id;

      const user = await prisma.user.findUnique({
        select:{
          username: true,
          password:false,
          Account: false,
        },
        where:{
          username: username
        }
      })
      if(user === null){
        return res.status(404).json({"error": "this user don't exist", "username": null});
      }
  
      return res.json(user)
      
    } catch (error){
      res.json(error);
    }

  }
}
import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class CheckUser{
  async handle(req: Request, res: Response){
    try{
      const username = req.params.username;

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
        return res.json({"username": null});
      }
  
      return res.json(user)
      
    } catch (error){
      res.json(error);
    }

  }
}
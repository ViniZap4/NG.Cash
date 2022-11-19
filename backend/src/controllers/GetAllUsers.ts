import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetUser{
  async handle(req: Request, res: Response){
    const users = await prisma.user.findMany({
      include:{
        Account: true
      }
    })
  
    return res.json(users);
  }
}
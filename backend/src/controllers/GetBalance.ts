import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetBalance{
  async handle(req: Request, res: Response){
    
    try{
      const idUser = req.params.id;

      const user = await prisma.user.findUnique({
        select:{
          username: true,
          password:false,
          id: true,
          Account:{
            select:{
              id: true,
              balance: true,
              debitedTransactions: true,
              creditedTransactions: true,
            }
          },
          
        },
        where:{
          id: idUser
        }
      })

      if(user === null){
        return res.status(404).json({"error": "this user don't exist"});
      }
  
      return res.json(user)
    
    }catch(error){
      return res.json({"message": `error`});
    }

  }
}
import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class DeleteUser{
  async handle(req: Request, res: Response){
    const idAccount = req.params.id;
    
    try {
      
      const DelAccount = await prisma.account.delete({
        where: {
          id: idAccount,
        },
      });

      return res.json(DelAccount);

    } catch (error) {
        console.log(`I couldn't delete account. Error: ${error}`);
        return res.json(`I couldn't delete account`);
    }

   
  }
}
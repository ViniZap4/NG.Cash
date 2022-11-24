import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class MakeTransaction{
  async handle(req: Request, res: Response){
    const username = req.params.id
    const {usernameToCredit, value} = req.body;

    if (!usernameToCredit || !value) {
      return res.status(422).json({"error": `Entrava invalida`});
    }

    const user = await prisma.user.findUnique({
      where:{
        id: username
      },
      select:{
        id: true,
        username:true,
        Account: true
      }
    })

    if(user === null){
      return res.status(404).json({"error": "Esse usuário não existe"});
    }


    if(!user.Account?.balance || user.Account?.balance < value){
      return res.json({"error": "Essa conta não tem fundos o suficiente"});
    }
    if(value <= 0 ){
      return res.json({"error": "Valor invalido"});
    }
    const userToCredit = await prisma.user.findUnique({
      where:{
        username: usernameToCredit
      },
      select:{
        id: true,
        Account: true
      }
    })

    if(userToCredit === null){
      return res.status(404).json({"error": "Usuario não existe"});
    }

    if(user.id === userToCredit.id){
      return res.status(404).json({"error": "Não pode eviar para si mesmo!"});
    }

    if(!userToCredit.Account){
      return res.status(404).json({"error": "Usuario selecionado não tem conta"});
    }
    
    try{
      const chashOut = await prisma.account.update({
        where:{
          userId: user.id
        }, 
        data:{
          balance: user.Account.balance - value
        }
      })
  
      const chashIn = await prisma.account.update({
        where:{
          userId: userToCredit.id
        }, 
        data:{
          balance: userToCredit.Account.balance + value
        }
      })


      const transaction = await prisma.transactions.create({
        data:{
          value: value,
          debitedaccountId: user.Account.id,
          creditedaccountId: userToCredit.Account.id
        }
      })

      res.status(201).json({
        "chashIn": chashIn,
        "chashOut":chashOut,
        "transaction": transaction
      })

    }catch(error){
      return res.status(422).json({"error": `Erro ao efetuar transação`});
    }



  }
}
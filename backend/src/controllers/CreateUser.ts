import { Request, Response } from "express";
import prisma from "../database/prismaClient";
import { hash } from "bcrypt";7

import {Size, checkPassword} from "../util/checkString";

export default class CreateUser{


  async handle(req: Request, res: Response){
    try{
      const {username, password, comfirmPassword} = req.body;
  
      const userNameReplaced = username.replace(/\s+/g, ''); // removing spaces
      
      
      if(!Size(userNameReplaced, 3, 60)){ 
        return res.status(422).json("username is lower than 3 characters");
      }
      
      // checing if user is already created
      const query = await prisma.user.findUnique({
        where:{
          username: userNameReplaced
        }
      })

      if(query !== null){
        return res.status(422).json({"error": "this user is already created"});
      }

      if(checkPassword(password, comfirmPassword) !== true){
        return res.status(422).json(checkPassword(password, comfirmPassword));
      }
      

      try {
        // insert user and account values into tables
        const user = await prisma.user.create({
          data:{

            username: userNameReplaced,
            password: await hash(password, 10),
            
            Account: { // creating a account for user
              create:{
                balance:100, // initialize with 100 balance
              }
            }
          }
        });
        return res.status(201).json(user);

      } catch (error) {
        console.log(`I couldn't create user. Error: ${error}`);
        return res.status(422).json(`I couldn't create user`);
      }
    }catch (error){
      return res.status(422).json(`All input shield are required`);
    }
  };
};
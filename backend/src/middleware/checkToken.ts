import { Request, Response } from "express";
import { verify  } from "jsonwebtoken";

export default function checkToken(req: Request, res:Response, next: () => void){
  const userId =req.params.id

  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(" ")[1];
  
  if(!token){
    return res.status(401).json({"message": "Acess Denied!"});
  }

  try{
    const secrect = process.env.SECRET;
    
    if(secrect) {

      verify(token, secrect)
     
      const parseIdToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
      if(parseIdToken.id !== userId){
        res.status(400).json({"message": "invalid token!"});
      }
    
      next()
    }else{
      throw new Error("security variable is not available");
    }

  }catch (error){
    res.status(400).json({"message": "invalid token!"});
  }

}
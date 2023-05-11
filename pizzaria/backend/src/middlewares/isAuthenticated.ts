import {NextFunction, Request , Response} from 'express';
import { verify } from 'jsonwebtoken';

//Vamos tipar usando interface
interface PayLoad{
    sub: string;

}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction  // 
     
){
    //Receber o token
    const authToken = req.headers.authorization;
    if(!authToken){ //Caso nao venha token, ja sera barrado. Nao autorizado.
        return res.status(401).end();
    }

    //Agora vamos desconstruir para pegar o token
    const [, token] = authToken.split(" "); //A virgula no array ignora o primeiro item
    //console.log(token);

    //Vamos validar o token
    try{
                //verify é um metodo do json web token
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad ; //Vai devolver 

        //A pos a validação do token vamos prosseguir com a aplicação.
        return next();

    } catch(err){
        return res.status(401).end();
    }

}
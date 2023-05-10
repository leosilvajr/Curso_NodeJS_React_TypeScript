import primaClient from "../../prisma";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken'; //Registrar e gerar um token

//Quero que quando meu usuario faça o login ,seja enviado o email e a senha.

interface AuthRequest{
    email:string
    password: string
}

class AuthUserService{
    async execute({email,password}: AuthRequest){

        //Vrificar se o email existe
        const user = await primaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            throw new Error("Usuário/Senha incorreto.")
        }

        //Verificar se a senha criptgrafada está correta
        const passwordMath = await compare(password, user.password);
        if(!passwordMath){ //Se a senha não é a mesma que esta no banco
            throw new Error("Usuário/Senha incorreto.")
        }

        //Gerar um token JWT e devolver os dados do usuario. id, name, email
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,{
                subject: user.id,
                expiresIn: '30d'
            } 
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };
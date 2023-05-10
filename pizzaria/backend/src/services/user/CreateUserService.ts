//Vamos importar o prismaCliente para ter acesso ao banco de dados.
import primaClient from "../../prisma";

import { hash } from 'bcryptjs'

//Interface do Typescript
interface UserRequest{
    //Tipagem dos parametros que eu quero receber
    name: string;
    email: string;
    password: string
}

class CreateUserService{
    async execute({name,email,password}: UserRequest){
        //Verificar se enviou um email.
        if(!email){
            throw new Error("Email incorreto.")
        }

        //Verificar se esse email ja esta cadastrado.
        const userAlreadyExists = await primaClient.user.findFirst({
            where:{
                email : email
            }
        })
        if(userAlreadyExists){
            throw new Error("Usuario já existe.")
        }

        //Vamos adicionar a criptografia.
        const passwordHash = await hash(password, 8)

        //Cadastrar um usuário no banco de dados.
        const user = await primaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash //passando a senha criptografada pro banco
            },
            select:{ // Select serve para informar oque voce quer devolver.
                id: true,
                name: true,
                email: true,
            }
        })
        return user;
        }
}

export {CreateUserService}
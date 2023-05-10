//Controller: vai receber diretamente a nossa requisição
/*
    Atraves da Controller vamos chamar um serviço, e passar os dados necessarios
*/

import {Request, response ,Response} from 'express'
import {CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
    async handle(req: Request, res : Response){
        const {name, email, password} = req.body; //Desconstruindo o objeto.

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,
            email,
            password
        });
        /* Usuario bate na rota '/users', Chama nosso controller que pega os dados do body
        inicializa o serviço e devolver na variavel user*/
        return res.json(user)
    }
}

export {CreateUserController}
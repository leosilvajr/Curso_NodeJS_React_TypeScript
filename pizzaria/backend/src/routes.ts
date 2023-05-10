import { Router} from 'express';
import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUSerController } from './controllers/user/AuthUSerController';

const router = Router();

//Criando a rota da API         //Tipando o req e o res
// -- ROTAS USER --
router.post('/users' , new CreateUserController().handle)

router.post('/session' , new AuthUSerController().handle)

//Exportando o router para conseguir acessar o arquivo.
export { router };
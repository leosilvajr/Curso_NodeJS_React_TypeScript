import { Router} from 'express';

import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUSerController } from './controllers/user/AuthUSerController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//Criando a rota da API         //Tipando o req e o res
// -- ROTAS USER --
router.post('/users' , new CreateUserController().handle)

router.post('/session' , new AuthUSerController().handle)

router.get('/me', isAuthenticated , new DetailUserController().handle)


// -- ROTAS CATEGORIA --
router.post('/category', isAuthenticated , new CreateCategoryController().handle)
router.get('/category', isAuthenticated , new ListCategoryController().handle)


//Exportando o router para conseguir acessar o arquivo.
export { router };
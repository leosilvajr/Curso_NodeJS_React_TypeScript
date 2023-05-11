import { Router} from 'express';
import multer from 'multer';

import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUSerController } from './controllers/user/AuthUSerController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListUserController } from './controllers/user/ListUserController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//Criando a rota da API         //Tipando o req e o res
// -- ROTAS USER --
router.post('/users' , new CreateUserController().handle)
router.get('/users', new ListUserController().handle)

router.post('/session' , new AuthUSerController().handle)

router.get('/me', isAuthenticated , new DetailUserController().handle)


// -- ROTAS CATEGORIA --
router.post('/category', isAuthenticated , new CreateCategoryController().handle)
router.get('/category', isAuthenticated , new ListCategoryController().handle)

// -- ROTAS PRODUTOS --
router.post('/product', isAuthenticated, upload.single('file') , new CreateProductController().handle)
router.get('/category/product', isAuthenticated,  new ListByCategoryController().handle)



//Exportando o router para conseguir acessar o arquivo.
export { router };
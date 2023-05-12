import { Router} from 'express';
import multer from 'multer';

//CONTROLLERS
import {CreateUserController} from './controllers/user/CreateUserController';
import { AuthUSerController } from './controllers/user/AuthUSerController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListUserController } from './controllers/user/ListUserController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';


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


// -- ROTAS ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send' , isAuthenticated, new SendOrderController().handle)

//Exportando o router para conseguir acessar o arquivo.
export { router };
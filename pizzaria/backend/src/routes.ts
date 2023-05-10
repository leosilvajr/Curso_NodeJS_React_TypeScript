import { Router, Request, Response} from 'express';

const router = Router();

//Criando a rota da API         //Tipando o req e o res
router.get('/teste', (req: Request, res: Response) => {
    return res.json({nome: 'Site Online !'})
    //throw new Error('Erro ao fazer requisição.')
});

//Exportando o router para conseguir acessar o arquivo.
export { router };
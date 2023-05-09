//Buscando todas as funcionalidades do express
const express = require('express');
const req = require('express/lib/request');

//console.log(express);
const server = express();
server.use(express.json());
//Querry params sao os parametros que a gente passa na frente da rota
//Querry params = ?nome=NojeJS

//Route Params = /curso/2


//Request Body é o objeto que vai no corpo da requisição
//Request Body = { nome: 'Nodejs', tipo: 'Backend'}

//CRUD = CREATE / READ / UPDATE / DELETE

const cursos = ['Node JS', 'Java Script', 'React Native'];

//Criando um novo middlware GLOBAL
server.use((req,res, next) =>{
    console.log(`URL CHAMADA: ${req.url}`);
    return next(); //retorna o next para seguir o fluxo
});

//middlware para verificar se foi informado nome no create
function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({ error: "Nome do curso é obrigatório." });
    }

    return next();
};

function checkIndexCurso(req , res , next ){
    const curso = cursos[req.params.index];
    if(!curso){
        return res.status(400).json({ error: "O Curso não existe" })
    }
    req.curso = curso;
    return next();

}


server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//localhost:3000/curso

//Dessa forma se a requisição for 1 ele vai retornar 'Javascript' por causa da posição do array
server.get('/cursos/:index', checkIndexCurso , (req,res) => {
    return res.json(req.curso);
    //Para testar : http://localhost:3000/curso/5

});

//Criando um curso
server.post('/cursos', checkCurso , (req,res) =>{
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', checkIndexCurso ,checkCurso ,(req,res) =>{
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;

    return res.json(cursos);
});


//Deletando um curso
server.delete('/cursos/:index', (req,res) =>{
    const {index} = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado com sucesso."});
});



//Ouvindo a porta 3000 para rodar.
server.listen(3000);

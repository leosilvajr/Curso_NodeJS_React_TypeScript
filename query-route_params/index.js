//Buscando todas as funcionalidades do express
const express = require('express');

//console.log(express);

const server = express();

//Querry params sao os parametros que a gente passa na frente da rota
//Querry params = ?nome=NojeJS

//Route Params = /curso/2


//Request Body é o objeto que vai no corpo da requisição
//Request Body = { nome: 'Nodejs', tipo: 'Backend'}


//localhost:3000/curso
server.get('/curso/:id', (req,res) => {

    const id = req.params.id;

    return res.json({curso: `Curso: ${id}`});
    //Para testar : http://localhost:3000/curso/5

});

//Ouvindo a porta 3000 para rodar.
server.listen(3000);

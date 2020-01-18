const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

//metodos HTTP:  GET, POST, PUT, DELETE

//tipodes de paramentros:
//Query paramans:request.query (filtros,ordenação,paginaçao)(Quase todas as vezes usados no metodo get)
//Route params: request.params(identificar um recurno na alteração ou remoção)
//Body: request.body(dados para criaçao ou alteração de um registro)

//mongoDB(nao-relacional)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes;
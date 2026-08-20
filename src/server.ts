import express from 'express';
import { Pet } from './types/Pet';
import { PetController } from './controllers/pet.controller';
import { PetRoutes } from './routes/pet.routes';


// Instanciar ou construir a API
const app = express();
app.use(express.json()); // JSON -> objeto literal 


// Listener de eventos - quando uma requisição chegar, a função de callback será executada
app.listen(6543, () => console.log('Servidor rodando na porta 6543'));

app.get('/', (request, response) => {
    return response.json({
        status: "OK"
    });
})

app.use(PetRoutes.bind());




// Request
// >
// Controllers - toda função callback que lida com a requisição e a resposta do servidor
// >
// Services - camada da aplicação responsável por lidar com a lógica de negócio
// > 
// Models
// >
// Repositories - camada da aplicação responsável por lidar com a persistência de dados (banco de dados, arquivos, etc)

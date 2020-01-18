const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://anyviel:31141208dan@cluster0-8srty.mongodb.net/weak10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:
// Query Params: request.query (Filtros, Ordenações, Paginação...) 'GET'
// Route Params: request.params (Identificar um recurso na alteração ou remoção) 'PUT, DELETE'
// Body: request.body (Dados para criação ou alteração de registro) 'POST, PUT'

// Mongo DB (Banco Não-Relacional)

app.listen(3333);
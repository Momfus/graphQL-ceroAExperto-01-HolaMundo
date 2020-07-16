import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express'; // Configuración del servidor con Apollo server (que muestra la herramienta de graphql)
import { createServer } from 'http';

// Configuracion de express, cors y comrpessión
const app = express(); 

app.use('*', cors() );

app.use( compression() );


// Para que el servidor tenga path principal (en caso que se use el server de graphqlHTTP)
const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware( { app} ); // escuchar el servidor en formato JSON


// Para que el servidor se quede escuchando el path marcado
const PORT = 5300;
const httpServer = createServer(app);
httpServer.listen(
    { port: PORT },
    () => console.log(`Hola Mundo API GRAPHQL http://localhost:${PORT}/graphql`)
)
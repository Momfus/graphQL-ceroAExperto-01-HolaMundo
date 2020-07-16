import express from 'express';
import compression from 'compression';
import cors from 'cors';


// Configuracion de express, cors y comrpessión
const app = express(); 

app.use('*', cors() );

app.use( compression() );

// Para que el servidor tenga path principal
app.use('/', (re, res) => {
    res.send('Bienvenido al curso de GraphQL')
})

// Para que el servidor se quede escuchando el path marcado
const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`Hola Mundo API GRAPHQL http://localhost:${PORT}`)
)
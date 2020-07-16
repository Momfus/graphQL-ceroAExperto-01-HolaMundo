import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import {graphqlHTTP } from 'express-graphql'; // Configuración del servidor GraphQL (que muestra la herramienta de graphql)

// Configuracion de express, cors y comrpessión
const app = express(); 

app.use('*', cors() );

app.use( compression() );

// Se definen los types (las operaciones y tipos que vamos a exponder en el API)
const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
`

// Los resolvers para responder a las respuestas a los query definidos en typeDefs
const resolvers : IResolvers = {
    Query :  {

        hola(): string {
            return 'Hola Mundo!';
        },

        holaConNombre(__: void , { nombre } ): string { // El primer parametro es una opcion no vista en este curso (averiguar bien para que sirve), el tercero es el contexto
            return `Hola Mundo ${ nombre }`
        },

        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso de GraphQL'
        },

    }
};

// Armar schema con los types y los resolvers
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Para que el servidor tenga path principal
app.use('/', graphqlHTTP ({

    schema: schema, // schema: schema
    graphiql:true

}));

// Para que el servidor se quede escuchando el path marcado
const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`Hola Mundo API GRAPHQL http://localhost:${PORT}/graphql`)
)
import { IResolvers } from "graphql-tools";

// Los resolvers para responder a las respuestas a los query definidos en typeDefs
const query : IResolvers = {
    Query :  { // En cada tipo (mutation, query, etc) se recomienda un archivo por cada uno

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

export default query;
import { GraphQLSchema } from "graphql";
import 'graphql-import-node'; // Para traer el contenido de un fichero en formato .graphql
import typeDefs from './schema.graphql';
import resolvers from './../resolvers/resolverMap'
import { makeExecutableSchema } from "graphql-tools";

// Armar schema con los types y los resolvers
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
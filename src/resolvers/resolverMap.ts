import { IResolvers } from "graphql-tools";
import query from "./query";

// Los resolvers para responder a las respuestas a los query definidos en typeDefs
const resolvers : IResolvers = {
    ...query
};

export default resolvers;
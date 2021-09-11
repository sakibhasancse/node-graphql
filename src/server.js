import { ApolloServer } from 'apollo-server';
// import dbConnection from './src/config/dbConnection';
import resolvers from '../src/graphql/resolvers';
import typeDefs from '../src/graphql/schema/typeDefs';
import { isAuthenticated } from './src/auth';
import dotenv from 'dotenv';
dotenv.config();

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
    context: ({ req }) => isAuthenticated(req),
    introspection: true,
    playground: true
});


server.listen({ port: process.env.PORT || 8000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
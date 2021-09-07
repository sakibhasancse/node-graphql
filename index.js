const { ApolloServer } = require('apollo-server');
const dbConnection = require('./src/config/dbConnection');
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');
const { isAuthenticated } = require('./src/auth');
require('dotenv').config();

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
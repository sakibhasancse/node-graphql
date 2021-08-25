const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./resolvers');
const typeDefs = require('./typeDefs/schema');
const PORT = process.env.PORT || 8000;
const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs
});

server.listen({ PORT }, () => {
    console.log('listening on port' + PORT);
});
const { ApolloServer } = require('apollo-server');
const dbConnection = require('./src/config/dbConnection');
const { resolvers } = require('./src/resolvers');
const typeDefs = require('./typeDefs/schema');
const PORT = process.env.PORT || 8000;
const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs
});
server.listen(PORT, () => {
    dbConnection(process.env.DB_CONNECTION)
    console.log('listening on port' + PORT);
});
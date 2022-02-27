/** 
 * This is the code we use to initialize the Reviews Server.
 * You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';

import resolvers from "./resolvers";
import typeDefs from './schema'; 

const { buildSubgraphSchema } = require('@apollo/subgraph');

// Set port number
const { PORT = 5003 } = process.env;

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

// Start the server
server.listen({port: PORT}).then(({ url }) => {
    console.log(`🎀 Reviews server ready at ${url} ✔️⭐`);
});
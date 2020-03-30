import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

const PORT = 3001;
const app = express();

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: '/api' });

app.listen(PORT);

console.log(`[app]: http://localhost:${PORT}`);

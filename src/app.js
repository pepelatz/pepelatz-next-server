import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { ApolloServer } from 'apollo-server-koa';

import typeDefs from './schema.gql';
import resolvers from './resolvers';
import { endpointURL, isDevelopment } from './utils/config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {},
  debug: isDevelopment
});

const app = new Koa();

app.use(helmet());
app.use(koaBody());
app.use(cors());

server.applyMiddleware({ app, path: endpointURL });

export default app;

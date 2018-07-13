import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

import typeDefs from './schema.gql';
import resolvers from './resolvers';
import { endpointURL, isDevelopment } from './utils/config';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = new Koa();
const router = new Router();

app.use(helmet());
app.use(koaBody());
app.use(cors());

router.all(
  endpointURL,
  // eslint-disable-next-line
  graphqlKoa(ctx => ({
    schema,
    context: {},
    debug: isDevelopment
  }))
);

if (isDevelopment) {
  router.get('/graphiql', graphiqlKoa({ endpointURL }));
}

app.use(router.routes()).use(router.allowedMethods());

export default app;

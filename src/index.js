import Koa from 'koa';

import { port } from './utils/config';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world';
});

app.listen(port, () => console.log(`Server started on port ${port}`));

const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const config = require('./config');
const Database = require('./models/database')

const index = require('./routes/index');
const auth = require('./routes/auth');
const users = require('./routes/users');
const cube = require('./routes/cube');

app.context.db = new Database(config.db.host, config.db.port, false);

// error handler
onerror(app);

// middlewares
app.use(json());
app.use(logger());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(cube.routes(), cube.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
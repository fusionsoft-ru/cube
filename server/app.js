const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const config = require('./config')
const Clex = require('./clex')

const index = require('./routes/index')
const auth = require('./routes/auth')
const users = require('./routes/users')
const cube = require('./routes/cube')
const db = require('./tests/db')

app.context.clex = new Clex(config.db.host, config.db.port, false)
app.use(json())
app.use(bodyparser())
app.use(logger())

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.use(index.routes(), index.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(cube.routes(), cube.allowedMethods())
app.use(db.routes(), db.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app

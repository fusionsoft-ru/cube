const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')

const index = require('./routes/index')
const cube = require('./routes/cube')

// error handler
onerror(app)

// middlewares
app.use(json())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(cube.routes(), cube.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

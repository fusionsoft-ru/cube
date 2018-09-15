const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const serve = require('koa-static')
const mount = require('koa-mount')
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const Loki = require('lokijs')
const Clex = require('./models/clex')
const config = require('./config')
const path = require('path')

const index = require('./routes/index')
const auth = require('./routes/auth')
const users = require('./routes/users')
const data = require('./routes/data')
const tests = require('./routes/tests')


app.context.loki = new Loki('./datastore.json', {autosave: true, autosaveInterval: 5000, autoload: true})
app.context.clex = new Clex(config.db.host, config.db.port, false)
app.use(json())
app.use(bodyparser())
// app.use(serve(path.join(__dirname,'./client/build')))
// app.use(mount('/static', static(path.join(__dirname, '/client/build/static'))))
app.use(serve(path.join(__dirname, 'public')))
// app.use(serve(path.join(__dirname, 'static')))
// app.use(serve(path.join(__dirname, 'static/css')))
// app.use(serve(path.join(__dirname, 'static/js')))
// app.use(serve(path.join(__dirname, 'static/media')))
// app.use(mount('/static/css', serve(path.join(__dirname, 'build/static/css'))))
// app.use(mount('/static/js', serve(path.join(__dirname, 'build/static/js'))))
// app.use(mount('/static/media', serve(path.join(__dirname, 'build/static/media'))))
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
app.use(data.routes(), data.allowedMethods())
app.use(tests.routes(), tests.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app

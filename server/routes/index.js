const router = require('koa-router')()

router.get('/', async (ctx) => {
  ctx.body = {
    title: 'index page'
  }
})

module.exports = router

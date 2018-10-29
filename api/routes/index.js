const router = require('koa-router')()

router.prefix('/api')

router.get('/', async (ctx) => {
  ctx.body = {
    title: 'index page'
  }
})

module.exports = router

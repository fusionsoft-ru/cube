const router = require('koa-router')()

router.prefix('/cube')

router.get('/', function (ctx, next) {
  ctx.body = {cubes: 'cubes'}
})

module.exports = router

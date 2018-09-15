const router = require('koa-router')()

router.prefix('/users')

router.get('/', async (ctx) => {
	users = await ctx.db.query('SELECT * FROM cube.users');
  ctx.body = users;
})

module.exports = router
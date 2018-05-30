const router = require('koa-router')()

router.prefix('/db')


router.get('/create', async (ctx) => {
	try {
		await ctx.clex.query('CREATE DATABASE IF NOT EXISTS cube')
		await ctx.clex.query('CREATE TABLE IF NOT EXISTS cube.users	(username String, password String, email String) Engine=Log');
		await ctx.clex.query("INSERT INTO cube.users values ('admin', 'a', 'admin@ya.ru')");
		await ctx.clex.query("INSERT INTO cube.users values ('user', 'u', 'user@ya.ru')");
	}
	catch(error) {
		console.log(error)
	} finally {
	  ctx.body = {message: 'database created'}
	}
})


router.get('/destroy', async (ctx) => {
  try {
	  await ctx.clex.query('DROP DATABASE IF EXISTS cube')
	} catch (err) {
		ctx.body = {error: err}
	} finally {
		ctx.body = {message: 'Database cube was destroyed'}
	}
})

module.exports = router

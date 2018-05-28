const router = require('koa-router')();

router.prefix('/');


router.get('/createdb', async (ctx) => {
	try {
		await ctx.db.query('CREATE DATABASE IF NOT EXISTS cube');
		await ctx.db.query('CREATE TABLE IF NOT EXISTS cube.users	(username String, fullname String, email String, password String) Engine=Log');
		await ctx.db.query("INSERT INTO cube.users values ('admin', 'admin', 'admin@ya.ru', 'a')");
		await ctx.db.query("INSERT INTO cube.users values ('user', 'user', 'user@ya.ru', 'u')");
	}
	catch(error) {
		console.log(error)
	}
	ctx.body = {message: 'database created'};
});


router.get('/dropdb', async (ctx) => {
	await ctx.db.query('DROP DATABASE IF EXISTS cube');
});

module.exports = router;

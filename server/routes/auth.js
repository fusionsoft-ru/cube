const router = require('koa-router')()
const ClickHouse = require('@apla/clickhouse')
const db = new ClickHouse ({host: 'localhost', port: 8123});


router.prefix('/')

router.get('/createdb', async (ctx) => {
	var query = '';
	query = 'CREATE DATABASE IF NOT EXISTS cube';
	await db.query(query, (err) => {
		if(err)
			console.log('Could not create database cube', err);
		else
			console.log('Database cube was created successfully');
	});
	query = 'CREATE TABLE IF NOT EXISTS cube.users	(username String, fullname String, email String, password String) Engine=Log';
	await db.query(query, (err) => {
		if(err)
			console.log('Could not create table cube.users', err);
		else
			console.log('Table cube.users was created successfully');
	});
	ctx.body = {message: 'database created'};

})

module.exports = router

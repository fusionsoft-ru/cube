const router = require('koa-router')()
const csv = require('csvtojson')()
const bcrypt = require('bcrypt')

router.prefix('/db')


router.get('/create', async (ctx) => {
	try {
		await ctx.clex.query('CREATE DATABASE IF NOT EXISTS cube')
		await ctx.clex.query('CREATE TABLE IF NOT EXISTS cube.users	(username String, password String, email String) Engine=Log');
		await ctx.clex.query('CREATE TABLE IF NOT EXISTS cube.claims (Id String, OrderId String, InvoiceId String, SalesOrderId String, CustomerId String, Company String, ReceiveDate String, Thickness String, Quality String, Tonnage String, Quantity String, InvoiceDate String, ReclamationSum String) Engine=Log');
	}
	catch(error) {
		console.log(error)
	} finally {
	  ctx.body = {message: 'database created'}
	}
})

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';  
  });
};

router.get('/fill', async (ctx) => {
	try {
		var sql = null
		sql = "INSERT INTO cube.users values ('admin', '{}', 'admin@ya.ru')".format(bcrypt.hashSync('a', 8))
		await ctx.clex.query(sql);
		sql = "INSERT INTO cube.users values ('user', '{}', 'user@ya.ru')".format(bcrypt.hashSync('u', 8))
		await ctx.clex.query(sql);
		const data = await csv.fromFile('./tests/claims.csv')
		console.log(data)
		for(var i=0; i < data.length; i++) {
			var id = data[i].Id
			var orderId = data[i].OrderId || ''
			var invoiceId = data[i].InvoiceId || ''
			var salesOrderId = data[i].SalesOrderId || ''
			var customerId = data[i].CustomerId || ''
			var company = data[i].Company || ''
			var receiveDate = data[i].ReceiveDate || ''
			var thickness = data[i].Thickness || ''
			var quality = data[i].Quality || ''
			var tonnage = data[i].Tonnage || ''
			var quantity = data[i].Quantity || ''
			var invoiceDate = data[i].InvoiceDate || ''
			var reclamationSum = data[i].ReclamationSum || ''
			sql = "INSERT INTO cube.claims (Id, OrderId, InvoiceId, SalesOrderId, CustomerId, Company, ReceiveDate, Thickness, Quality, Tonnage, Quantity, InvoiceDate, ReclamationSum) VALUES ('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}')".format(id, orderId, invoiceId, salesOrderId, customerId, company, receiveDate, thickness, quality, tonnage, quantity, invoiceDate, reclamationSum)
			console.log(sql)
			await ctx.clex.query(sql)
		}	
	} catch (err) {
	  ctx.body = {message: 'Errors in data loading'}
	} finally {
	  ctx.body = {message: 'Data loaded succesfully'}
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

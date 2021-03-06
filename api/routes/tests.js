const router = require("koa-router")();
const csv = require("csvtojson")();
const bcrypt = require("bcrypt");
var fs = require("fs");
const Loki = require('lokijs')


router.get("/database/create", async ctx => {
  try {
    await ctx.clex.query("CREATE DATABASE IF NOT EXISTS cube");
    await ctx.clex.query(
      "CREATE TABLE IF NOT EXISTS cube.users	(username String, password String, email String) Engine=Log"
    );
    await ctx.clex.query(
      "CREATE TABLE IF NOT EXISTS cube.claims (Id String, OrderId String, InvoiceId String, SalesOrderId String, CustomerId String, Company String, ReceiveDate String, Thickness String, Quality String, Tonnage String, Quantity String, InvoiceDate String, ReclamationSum String) Engine=Log"
    );
  } catch (error) {
    console.log(error);
  } finally {
    ctx.body = { message: "database created successfully" };
  }
});

router.get("/database/load", async ctx => {
  try {
    var sql = null;
    sql = "INSERT INTO cube.users values ('admin', '{}', 'admin@ya.ru')".format(
      bcrypt.hashSync("a", 8)
    );
    await ctx.clex.query(sql);
    sql = "INSERT INTO cube.users values ('user', '{}', 'user@ya.ru')".format(
      bcrypt.hashSync("u", 8)
    );
    await ctx.clex.query(sql);
    const data = await csv.fromFile("../models/claims.csv");
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var id = data[i].Id;
      var orderId = data[i].OrderId || "";
      var invoiceId = data[i].InvoiceId || "";
      var salesOrderId = data[i].SalesOrderId || "";
      var customerId = data[i].CustomerId || "";
      var company = data[i].Company || "";
      var receiveDate = data[i].ReceiveDate || "";
      var thickness = data[i].Thickness || "";
      var quality = data[i].Quality || "";
      var tonnage = data[i].Tonnage || "";
      var quantity = data[i].Quantity || "";
      var invoiceDate = data[i].InvoiceDate || "";
      var reclamationSum = data[i].ReclamationSum || "";
      sql = "INSERT INTO cube.claims (Id, OrderId, InvoiceId, SalesOrderId, CustomerId, Company, ReceiveDate, Thickness, Quality, Tonnage, Quantity, InvoiceDate, ReclamationSum) VALUES ('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}')".format(
        id,
        orderId,
        invoiceId,
        salesOrderId,
        customerId,
        company,
        receiveDate,
        thickness,
        quality,
        tonnage,
        quantity,
        invoiceDate,
        reclamationSum
      );
      console.log(sql);
      await ctx.clex.query(sql);
    }
  } catch (err) {
  	console.log(err);
    ctx.body = { message: "Errors in database loading" };
  } finally {
    ctx.body = { message: "Database loaded successfully" };
  }
});

router.get("/database/destroy", async ctx => {
  try {
    await ctx.clex.query("DROP DATABASE IF EXISTS cube");
  } catch (err) {
    ctx.body = { error: err };
  } finally {
    ctx.body = { message: "Database destroyed successfully" };
  }
});

router.get("/datastore/create", async ctx => {
  ctx.loki = new Loki('./datastore.json', {autosave: true, autosaveInterval: 5000, autoload: true})
  var structure = ctx.loki.getCollection("structure")
  if(!structure) {
    structure = ctx.loki.addCollection("structure")
    const structureFile = fs.readFileSync("./models/structure.json")
    const structureData = JSON.parse(structureFile)
    structure.insert(structureData)
  }
  ctx.body = { message: "Datastore created successfully" }
})


router.get("/datastore/destroy", async ctx => {
  if(fs.existsSync("./datastore.json"))
	  fs.unlinkSync("./datastore.json")
  ctx.body = { message: "Datastore destroyed successfully" }
});

module.exports = router;

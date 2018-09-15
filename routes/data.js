const router = require("koa-router")();

router.get("/data/:cube", async ctx => {
  const data = ctx.loki.getCollection("cube-data");
  ctx.body = data;
  /*
  const cube = ctx.params.cube
  const sql = `SELECT * FROM cube.${cube}`
  console.log(sql)
  cube_data = await ctx.clex.query(sql)
  ctx.body = cube_data
  */
});

router.get("/cube/:cube", ctx => {
  const structure = ctx.loki.getCollection("cube-structure");
  ctx.body = structure;
});

router.post("/data/:cube", async ctx => {
  ctx.body = { data: "hi" };
});

router.delete("/data/:cube", async ctx => {
  ctx.body = { cube: "post" };
});

router.post("/cube/:cube/upload", async ctx => {
  ctx.body = { cube: "post" };
});

router.delete("/cube/:cube", async ctx => {
  ctx.body = { cube: "post" };
});

module.exports = router;

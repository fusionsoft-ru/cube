const router = require('koa-router')()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.prefix('/auth')


router.post('/register', async (ctx) => {
  username = ctx.request.body.username
	password = ctx.request.body.password
	email = ctx.request.body.email
  is_exist = await ctx.clex.exist(`SELECT * FROM cube.users WHERE username='${username}'`)

  if(!is_exist) {
		if(username && password && email) {
			const encoded = bcrypt.hashSync(password, 8)
			const token = jwt.sign({ username: username}, config.app.secret, { expiresIn: 86400 })
			console.log(typeof(ctx.clex))
			await ctx.clex.query(`INSERT INTO cube.users VALUES ('${username}', '${encoded}', '${email}')`)
			ctx.body = { auth: true, token: token }
		}
		else {
			ctx.body = { auth: false, message: 'No credentials provided' }
		}
	}
	else {
		ctx.body = { auth: false, message: 'Username is already registered' }
	}
})


router.get('/login', async (ctx) => {
  const token = ctx.request.headers['x-access-token']
	if(token) {
	  jwt.verify(token, config.app.secret, (err, decoded) => {
		  if(err) {
			  ctx.response.status = 500
			  ctx.body = { auth: false, message: 'Failed to authentificate token' }
		  }
		  else {
				ctx.response.status = 200
				ctx.body = decoded
		  }
		})
	}
	else {
		ctx.response.status = 401
    ctx.body = { auth: false, message: 'No token provided' }
	}
})


router.post('/login', async (ctx) => {
  const username = ctx.request.body.username
	const password = ctx.request.body.password
	const res = await ctx.clex.query(`SELECT * FROM cube.users WHERE username='${username}'`)
	if(username && password && res.length) {
		if(bcrypt.compareSync(password, res[0].password)) {
			const token = jwt.sign( { username: username }, config.app.secret, { expiresIn: 86400 })
			ctx.response.status = 200
			ctx.body = { auth: true, token: token }
    }
		else {
			ctx.response.status = 500
      ctx.body = { auth: false, message: 'Failed to authentificate credentials' }
		}
	}
})				


router.get('/logout', (ctx) => {
	ctx.body = { auth: false, token: null }
})


module.exports = router

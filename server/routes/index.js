var express = require('express');
var router = express.Router();

const ClickHouse = require('@apla/clickhouse');
var query = 'SELECT * FROM cube.users';
var ch = new ClickHouse ({host: 'localhost', port: 8123});

router.get('/', (req, res) => {
	ch.query(query, {syncParser: true}, (err, datik) => {
		console.log(datik['data'])
		res.send(datik['data'])
	})
});

module.exports = router;

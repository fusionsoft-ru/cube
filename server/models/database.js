const ClickHouse = require('@apla/clickhouse')

function to_json(res) {
	var rows = []
	var names = []
	for(var i=0; i < res.rows; i++) {
		names.push(res.meta[i].name)
	}
	for(var i=0; i < res.rows; i++) {
		row = {}
		for(var j=0; j < res.data[i].length; j++) {
			//console.log(names[i])
			row[names[j]] = res.data[i][j]
		}
		console.log('row', row)
		rows.push(row)
	}
	return rows
} 

class Database {
	constructor(host, port, debug){
		this.host = host
		this.port = port
		this.debug = debug
		this.db = new ClickHouse ({
			host: host, 
			port: port, 
			debug: false
		})
	}
	
	query(sql) {
		return new Promise((resolve, reject) => {
			this.db.query(sql, {syncParser: true}, (err, res) => {
				resolve(to_json(res));
				reject(err);
			})
		})
	}
}

module.exports = Database
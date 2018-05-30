const ClickHouse = require('@apla/clickhouse')


class Clex {
	constructor(host, port, debug){
		this.host = host
		this.port = port
		this.debug = debug
		this.ch = new ClickHouse ({
			host: host, 
			port: port, 
			debug: false
		})
	}

  to_json(res) {
		var row = {}
		var rows = []
		var names = []
		if(res.rows > 0) {
			for(let i=0; i < res.meta.length; i++) {
				names.push(res.meta[i].name)
			}
			for(let i=0; i < res.rows; i++) {
        row = {}
				for(var j=0; j < res.data[i].length; j++) {
					row[names[j]] = res.data[i][j]
				}
				rows.push(row)
			}
		}
		return rows
	} 
	
	async query(sql) {
		return this.to_json(await this.ch.querying(sql, {syncParser: true}))
	}

	async exist(sql) {
    const res = await this.ch.querying(sql, {syncParser: true})
    return res.data.length > 0
	}
}

module.exports = Clex

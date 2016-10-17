const server = new (require('express'))()
const port = 1990

const express = require('express')

server.use('/res', express.static('res'))
server.use('/build', express.static('build'))
server.get('*',function(req,res) {
	res.sendfile(__dirname + '/index.html');
})

server.listen(port,function(error) {
	if (error) {
		console.error(error)
	} else {
		console.log('* Listening on http://localhost:1990')
		console.log('* Use Ctrl-C to stop')
	}
})
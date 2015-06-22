var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var port = 8989;

app.use(cors());
app.use(bodyParser.json());

app.get('/interest_rate', function(req, res){
	res.json(Math.floor(Math.random() * 2000) / 100);
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('ready, set, go on', port);
});


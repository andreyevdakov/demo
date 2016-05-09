const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
	
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function() {
	console.log('Demo server is running on port', app.get('port'));
});

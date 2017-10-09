const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.status(200).send('Hello world');
});


const PORT = process.env.HTTP_PORT || 3000;
const APPLICATION_NAME = process.env.APPLICATION_NAME || '';

app.listen(PORT , function () {
	console.log('Application ' + APPLICATION_NAME + ', listening on port: ' + PORT);
}); 

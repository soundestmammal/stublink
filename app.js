console.log("Starting Application");

const express = require('express');
const path = require('path');

const app = express();

// Set static path.
app.use(express.static(path.join(__dirname, '/public')));


app.listen(5000, function(){
	console.log('listening on port 5000')
});

app.get('/' , function (req, res) {
	res.sendFile(__dirname + '/public/index.html')
});

app.get('/about' , function (req, res) {
	res.sendFile(__dirname + '/public/about.html')
});

// app.post('/info', (req, res) => {
// 	console.log("It worked");
// 	res.sendFile(__dirname + '/contact.html');
// })



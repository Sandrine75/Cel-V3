
//npm install express --save
var express = require('express');
var app = express();

//npm install ejs --save
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('home');
});


//app.listen(8081, function () {
 // console.log("Server listening on port 8081");
//});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
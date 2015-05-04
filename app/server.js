var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index');
});

app.listen(3000, function(){console.log('listening on port 3000'); });
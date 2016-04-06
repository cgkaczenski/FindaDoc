var express = require('express'),
	exphbs = require('express-handlebars');
	path = require('path'),
	bodyParser = require('body-parser'),
	nodemailer = require('nodemailer');

var routes = require('./routes/index'),
	doctors = require('./routes/doctors'),
	categories = require('./routes/categories'),
	app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/doctors', doctors);
app.use('/categories', categories);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log("sever running on port" + app.get('port'));
});


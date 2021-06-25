const path = require('path');
const express = require('express');
var morgan = require('morgan');
const app = express();
const port = 3000
var handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const { query } = require('express');

const route = require('./routes')
const db = require('./config/db')

//Connect to DB
db.connect();

//HTTP logger
//app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public/')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'))

//Template engine
app.engine(
  'hbs',
 
  handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// path.join(__dirname, 'resources', 'views')

//Route init
route(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})
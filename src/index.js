const express = require('express');
const path = require('path')
const morgan = require('morgan');
const hbs  = require('express-handlebars');

// import { engine } from 'express-handlebars';
const app = express()
const port = 2509

app.use(express.static(path.join(__dirname,'public')));


//http logger
app.use(morgan('combined'));


//template engine
app.engine('.hbs', hbs.engine({extname: '.hbs'}));

app.set('view engine', '.hbs');
//app.set('views', __dirname+'\\resources\\views'); c1

app.set('views',path.join(__dirname, 'resources', 'views')); //c2



app.get('/', (req, res, next) => {
  res.render('home');
});


app.get('/news', (req, res, next) => {
  res.render('news');
});

app.get('/search',(req, res, next) => {
  res.render('search', {layout: false});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
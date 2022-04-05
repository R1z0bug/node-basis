const express = require('express');
const path = require('path')
//const morgan = require('morgan');
const hbs  = require('express-handlebars');

// import { engine } from 'express-handlebars';
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'pulic')))


//http logger
//app.use(morgan('combined'));


//template engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
//app.set('views', __dirname+'\\resources\\views'); c1
app.set('views',path.join(__dirname, 'resources', 'views')); //c2



app.get('/', (req, res, next) => {
  res.render('home', {layout: false});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
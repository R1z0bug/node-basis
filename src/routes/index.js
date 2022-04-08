const newsRouter = require('./news');

function routes(app){
    app.use('/news', newsRouter);

    app.get('/', (req, res, next) => {
        res.render('home');
      });     
      app.get('/search',(req, res, next) => {
        res.render('search');
      });
      app.post('/search',(req, res, next) => {
      
        console.log(req.query);
      
        res.send('');
      });
}
module.exports = routes;
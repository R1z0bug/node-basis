const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("express-handlebars");
// import { engine } from 'express-handlebars';
const app = express();
const port = 2509;

const route = require("./routes");
const db = require('./config/db');

// connect to db
db.connect();
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//XMLHttpRequest,fetch,axios

//http logger
app.use(morgan("combined"));

//template engine
app.engine(".hbs", hbs.engine({ extname: ".hbs" }));

app.set("view engine", ".hbs");
//app.set('views', __dirname+'\\resources\\views'); c1

app.set("views", path.join(__dirname, "resources", "views")); //c2

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

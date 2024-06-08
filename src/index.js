const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars.engine({
  extname : ".hbs"
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'recourse\\view'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
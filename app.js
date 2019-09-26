const morgan = require('morgan');
const express = require('express');
const app = express();
const html = require('html-template-tag');
const models = require('./models');
const db = models.db;
const user = models.user;
const page = models.page;
const functionDirectory = require('./views/index.js');
const router = express.Router();
const layoutFunction = functionDirectory.layout;
const addPageFunc = functionDirectory.addPage;
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

// This is showing: //GET/Wiki/add

// it prints out the action that is being excuted, so its a great saftey net
app.use(morgan('dev'));
app.use('/wiki', wikiRouter);

//This seems like there is port for the front end to render on the page
const PORT = 3000;

//This is too convert the infofrom the database to be used in the jss
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// shorthand of 17
app.use(express.static('public'));
// what is the difference between line 15 and 17?
// app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res, next) {
  // rendering HTML on the webpage
  res.send(layoutFunction(''));
});

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

router.get('/', (req, res, next) => {
  res.send('got to get /wiki');
});

router.post('/', (req, res, next) => {
  res.send('got to post wiki');
});

const init = async function() {
  await db.sync({ force: true });
  await user.sync();
  await page.sync();
  app.listen(PORT, function() {
    console.log('connected to the database');
  });
};

init();

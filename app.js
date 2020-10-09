const express = require('express');
const time = require('./utils/loadTime.js');
const saveTime = require('./utils/saveTime');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
  const pastData = time();
  res.render('index', {
    totalTime: pastData,
  });
});

app.get('/start', (req, res) => {
  console.log('start');
  const pastData = time();
  console.log('hel');
  console.log(pastData);
  res.render('timer', {
    totalTime: pastData,
  });
});
app.post('/stop', (req, res) => {
  console.log('hello');
  if (req.body.hours === '') {
    req.body.hours = '0';
  }
  if (req.body.mins === '') {
    req.body.mins = '0';
  }

  saveTime(JSON.stringify(req.body));
  res.redirect('/');
});

app.post('/reset', (req, res) => {
  console.log('reset');
  const data = {
    hours: 0,
    mins: 0,
  };
  // console.log(JSON.stringify(data));
  saveTime(JSON.stringify(data));
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App is live at port: ${port}`);
});

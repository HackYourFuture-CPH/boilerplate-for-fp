require('dotenv').config();

const admin = require('firebase-admin');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const HttpError = require('./api/lib/utils/http-error');

const buildPath = path.join(__dirname, '../../dist');

const apiRouter = require('./api/routes/api-router');
// const { authenticate } = require('./middleware/auth');

require('./config/db');

admin.initializeApp(); // Might need to add service key env.

const app = express();

app.use(express.static(buildPath));

// Enable when Firebase admin is added
// app.use(authenticate);

app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';

app.disable('x-powered-by');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev', {stream: winston.stream}));
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(cookieParser());
app.use(cors());

app.use(process.env.API_PATH, apiRouter);

app.use((err, req, res, next) => {
  console.log('Got here!');
  if (res.headersSent) {
    console.log('headers sent...');
    return next(err);
  }

  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    console.log('AAKJSDHJKASHDLASDJSD');
    if (err.body) {
      return res.json(err.body);
    }
    return res.send({ error: err.message });
  }

  res.status(500).send({ error: err || 'Unknown error' });
});

app.use('/api/', function (req, res) {
  res.status(404).send("Sorry can't find that!");
});

// If "/api" is called, redirect to the API documentation.
app.use('/api', function (req, res) {
  res.redirect(`${process.env.API_PATH}/documentation`);
});

app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;

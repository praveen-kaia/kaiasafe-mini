var express = require('express');
var morgan = require('morgan');
require('dotenv').config();
var cors = require('cors')

var indexRouter = require('./routes/index');
var walletsRouter = require('./routes/wallets');
var invitationsRouter = require('./routes/invitations');

const authMiddleware = require('./middlewares/auth.middleware');

var app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

// App Routes
app.use('/', indexRouter);
app.use('/wallets', authMiddleware, walletsRouter);
app.use('/invitations', authMiddleware, invitationsRouter);

app.use(function(req, res, next) {
  res.status(500).json({ success: false, message: 'API not found' });
});

module.exports = app;
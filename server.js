const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn')

const app = express();

require('dotenv').config();

// Connect to the database
require('./config/database');


app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

const port = process.env.PORT ||  3001;

// Put API routes here, before the "catch all" route
app.use('/updateguest',ensureLoggedIn, require('./routes/api/guest'))
app.use('/event', ensureLoggedIn ,require('./routes/api/event'))
app.use('/api/eventslist',ensureLoggedIn, require('./routes/api/eventsList'));
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
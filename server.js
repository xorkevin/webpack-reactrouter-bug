const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const binpath = path.resolve(__dirname, 'bin');

function start(port) {
  const app = express();
  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(
    '/static',
    express.static('bin/static', {
      fallthrough: false,
      maxAge: 31536000000,
    }),
  );
  app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
  });
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: binpath,
    });
  });

  app.listen(port);
}

start(3030);

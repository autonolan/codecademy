const express = require('express');
const quotesRoute = require('./quotes');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.use('/api/quotes', quotesRoute);

app.listen(PORT);
const express = require('express');
const quotesRoute = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

quotesRoute.get('/random', (req, res) => {
    let quoteResponse = {quote: {}}
    quoteResponse.quote = getRandomElement(quotes);
    res.send(quoteResponse);
});

quotesRoute.get('/', (req, res) => {
    let quoteResponse = {quotes: []}
    if (req.query.person) {
        quoteResponse.quotes = quotes.filter(quote => quote.person == req.query.person);
    } else if (!req.query.hasOwnProperty("person")) {
        quoteResponse.quotes = quotes;
    } else {
        res.status(400).send('Invalid request');
    }
    res.send(quoteResponse);
})

quotesRoute.post('/', (req, res) => {
    let quoteResponse = {quote: {}}
    if (req.query.hasOwnProperty("quote") && req.query.hasOwnProperty("person")) {
        quotes.push(req.query);
        quoteResponse.quote = req.query;
        res.send(quoteResponse);
    } else {
        res.status(400).send();
    }
})
module.exports = quotesRoute;
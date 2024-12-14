const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    console.log('Retrieving all meetings!');
    res.send(db.getAllFromDatabase('meetings'));
});

meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings')
    res.send();
})

module.exports = meetingsRouter;
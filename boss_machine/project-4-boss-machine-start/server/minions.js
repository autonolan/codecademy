const express = require('express');
const minionsRouter = express.Router();
const db = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
    console.log(id);
    req.minionId = id;
    next();
})

minionsRouter.get('/', (req, res, next) => {
    console.log('retrieving all minions');
    res.send(db.getAllFromDatabase('minions'));
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = req.body
    console.log(newMinion);
    db.addToDatabase('minions', newMinion);
    res.send(newMinion);
})

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(db.getFromDatabaseById('minions', req.minionId));
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const minionUpdate = req.body;
    minionUpdate.id = req.minionId;
    db.updateInstanceInDatabase('minions', minionUpdate);
    res.send(req.body);
})

minionsRouter.delete(':/minionId', (req, res, next) => {
    console.log(`deleting minion ${req.minionId}`)
    db.deleteFromDatabasebyId('minions', req.minionId);
    res.send(db.getAllFromDatabase('minions'));
})

module.exports = minionsRouter;
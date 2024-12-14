const express = require('express');
const ideasRouter = express.Router();
const db = require('./db');

ideasRouter.param('ideaId', (req, res, next, id) => {
    req.ideaId = id;
    next();
})

ideasRouter.get('/', (req, res, next) => {
    console.log('Retrieving all ideas!');
    res.send(db.getAllFromDatabase('ideas'));
});

ideasRouter.post('/', (req, res, next) => {
    const newidea = req.body
    console.log(newidea);
    db.addToDatabase('ideas', newidea);
    res.send(newidea);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(db.getFromDatabaseById('ideas', req.ideaId));
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    const ideaUpdate = req.body;
    ideaUpdate.id = req.ideaId;
    db.updateInstanceInDatabase('ideas', ideaUpdate);
    res.send(req.body);
})

ideasRouter.delete(':/ideaId', (req, res, next) => {
    console.log(`deleting idea ${req.ideaId}`)
    db.deleteFromDatabasebyId('ideas', req.ideaId);
    res.send(db.getAllFromDatabase('ideas'));
})

module.exports = ideasRouter;
const PlayerModel = require('../models/player.model');
const express = require('express');
const router = express.Router();

router.get('/api/players', (req, res) => {
    res.send("No players");
});

router.get('/api/players/:id', (req, res) => {
    res.send(`No player with the id of ${req.params.id}`);
});

//req.params ":"
//req.query "?"

//app.post();
//app.put();
//app.delete();

//400 Bad request

//Validation package: Joi

module.exports = router;
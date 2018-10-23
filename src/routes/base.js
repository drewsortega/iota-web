'use strict';


const express = require('express');
let router = express.Router();
const data = require('../data');

router.get('/', (req, res) => {
    res.json(data.toObject());
});

module.exports = router;
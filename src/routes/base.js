'use strict';


const express = require('express');
let router = express.Router();

//GET /
router.get('/', (req, res) => {
    res.sendFile('../public/index.html');
});

module.exports = router;
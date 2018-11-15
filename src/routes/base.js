'use strict';


const express = require('express');
let router = express.Router();

//GET /
router.get('/', (req, res) => {
    res.render('home', { server_url: `${process.env.SERVER_URL}:${process.env.PORT}`});
});

module.exports = router;
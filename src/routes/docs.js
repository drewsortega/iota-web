'use strict';


const express = require('express');
let router = express.Router();

router.get('/api', (req, res) => {
    res.json({ value: 'public' });
});

module.exports = router;
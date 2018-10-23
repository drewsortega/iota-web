'use strict';


const express = require('express');
const _ = require('lodash');
let router = express.Router();
const data = require('../data');

router.post('/button/enable', (req, res) => {
    data.buttonEnabled = true;
    res.status(200).json({ message: 'success' });
});

router.post('/button/disable', (req, res) => {
    data.buttonEnabled = false;
    res.status(200).json({ message: 'success'});
});

router.post('/temp', (req, res) => {
    if(!_.isNil(req.query.value)){
        data.temp = req.query.temp;
        res.status(200).json({ message: 'success'});
    }else{
        res.status(500).json({ message: 'bad value'});
    }
});

module.exports = router;
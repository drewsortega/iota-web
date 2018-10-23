'use strict';


const express = require('express');
const _ = require('lodash');
let router = express.Router();
const data = require('../data');

router.post('/button/enable', (req, res) => {
    data.enableButton();
    res.status(200).json({success: true});
});

router.post('/button/disable', (req, res) => {
    data.disableButton();
    res.status(200).json({success: true});
});

router.post('/temp', (req, res) => {
    if (!_.isNil(req.query.value)) {
        data.setTemp(req.query.value);
        res.status(200).json({success: true});
    } else {
        res.status(200).json({success: false, error: 'bad value. try /temp?value=40'});
    }
});

router.get('/data', (req, res) => {
    res.json(data);
});

module.exports = router;
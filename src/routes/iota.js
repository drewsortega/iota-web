'use strict';


const express = require('express');
const _ = require('lodash');
let router = express.Router();
const data = require('../data');

//POST /iota/button/enable
router.post('/button/enable', (req, res) => {
    data.enableButton();
    res.status(200).json({success: true});
});

//POST /iota/button/disable
router.post('/button/disable', (req, res) => {
    data.disableButton();
    res.status(200).json({success: true});
});

//POST /iota/temp?value=14
router.post('/temp', (req, res) => {
    if (!_.isNil(req.query.value)) {
        //set data temp
        data.setTemp(req.query.value);
        //send success
        res.status(200).json({success: true});
    } else {
        //send error
        res.status(200).json({success: false, error: 'bad value. try /temp?value=40'});
    }
});

//POST /iota/analog?value=0.15
router.post('/analog', (req, res) => {
    //ensure a query was provided 
    if(!_.isNull(req.query.value)) {
        //set data value
        data.setAnalog(req.query.value);
        //send success
        res.status(200).json({success: true});
    }else{
        //send error
        res.etatus(200).json({sucess: false, error: 'bad value. try /analog?value=0.01'});
    }
});

//GET /data
router.get('/data', (req, res) => {
    res.json(data);
});

module.exports = router;
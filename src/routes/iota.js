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

//POST /iota/light?value=0.15
router.post('/light', (req, res) => {
    //ensure a query was provided 
    if(!_.isNull(req.query.value)) {
        //set data value
        data.setLight(req.query.value);
        //send success
        res.status(200).json({success: true});
    }else{
        //send error
        res.status(200).json({sucess: false, error: 'bad value. try /iota/light?value=0.01'});
    }
});

//POST /iota/knob?value=0.15
router.post('/knob', (req, res) => {
    //ensure a query was provided 
    if(!_.isNull(req.query.value)) {
        //set data value
        data.setKnob(req.query.value);
        //send success
        res.status(200).json({success: true});
    }else{
        //send error
        res.status(200).json({sucess: false, error: 'bad value. try /iota/knob?value=0.01'});
    }
});

//POST /iota/rh?value=0.15
router.post('/rh', (req, res) => {
    //ensure a query was provided 
    if(!_.isNull(req.query.value)) {
        //set data value
        data.setRh(req.query.value);
        //send success
        res.status(200).json({success: true});
    }else{
        //send error
        res.status(200).json({sucess: false, error: 'bad value. try /iota/rh?value=0.01'});
    }
});

//POST /iota/analog?value=0.15
router.post('/analog', (req, res) => {
    res.redirect('/iota/knob');
});

//GET /data
router.get('/data', (req, res) => {
    res.json(data);
});

module.exports = router;
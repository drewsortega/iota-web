'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

//create object
function Data() {
    Object.defineProperties(this, {
        _buttonPushed: {
            value: false,
            writable: true
        },
        _temp: {
            value: 0,
            writable: true
        },
        _light: {
            value: 0,
            writable: true
        },
        _knob: {
            value: 0,
            writable: true
        },
        _rh: {
            value: 0,
            writable: true
        }
    });
}

//inhert event emitting to make data refresh easier
util.inherits(Data, EventEmitter);

Data.prototype.enableButton = function enableButton(){
    this._buttonPushed = true;
    //emit the changed event, which is listened for. When this event is emitted, socket.io picks it up and sends over another value.
    this.emit('changed');
};

Data.prototype.disableButton = function disableButton(){
    this._buttonPushed = false;
    this.emit('changed');
};

Data.prototype.setTemp = function setTemp(temp){
    this._temp = temp;
    this.emit('changed');
};

Data.prototype.setLight = function setLight(value){
    this._light = value;
    this.emit('changed');
};

Data.prototype.setRh = function setRh(value){
    this._rh = value;
    this.emit('changed');
};

Data.prototype.setKnob = function setKnob(value){
    this._knob = value;
    this.emit('changed');
};

Data.prototype.toObject = function toObject(){
    //write as new object without reference to local data for protection
    return {
        buttonPushed: this._buttonPushed,
        temp: this._temp,
        light: this._light,
        knob: this._knob,
        rh: this._rh,
    };
};

//export singleton for data class instance
module.exports = new Data();
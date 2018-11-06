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
        _analog: {
            value: 0,
            writable: true
        }
    });
}

//inhert event emitting to make data refresh easier
util.inherits(Data, EventEmitter);

Data.prototype.enableButton = function enableButton(){
    this._buttonPushed = true;
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

Data.prototype.setAnalog = function setAnalog(value){
    this._analog = value;
    this.emit('changed');
};

Data.prototype.toObject = function toObject(){
    return {
        buttonPushed: this._buttonPushed,
        temp: this._temp,
        analog: this._analog
    };
};

//export singleton for data class instance
module.exports = new Data();
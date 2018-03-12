const _ = require('lodash');
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

module.exports = {
    enc: (message) => {
        let cipher = "";
        for(let i = 0; i<message.length; i++) {
           cipher += String.fromCharCode(message[i].charCodeAt(0) + i^2%255);
        }
        return cipher;
    },

    dec: (message) => {
        let cipher = "";
        for(let i = 0; i<message.length; i++) {
            cipher += String.fromCharCode(message[i].charCodeAt(0) - i^2%255);
        }
        return cipher;
    },
};
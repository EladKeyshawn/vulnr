/* eslint-disable no-extend-native */
const _ = require('lodash');


module.exports = {
  enc: (message) => {
    let cipher = '';
    for (let i = 0; i < message.length; i += 1) {
      cipher += String.fromCharCode(message[i].charCodeAt(0) + ((i * i) % 255));
    }
    return cipher;
  },

  dec: (message) => {
    let cipher = '';
    for (let i = 0; i < message.length; i += 1) {
      cipher += String.fromCharCode(message[i].charCodeAt(0) - ((i * i) % 255));
    }
    return cipher;
  },
};

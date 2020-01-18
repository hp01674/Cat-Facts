'use strict';
const fetch = require('node-fetch');

module.exports.cat_fact =  async (event, context, callback) => {
  
  let alexa_says = 'Hey there.'
  const data = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const fact = await data.json();
  alexa_says = fact.text
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: alexa_says,
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};
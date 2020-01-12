'use strict';

module.exports.cat_fact = (event, context, callback) => {
  // TODO: Write code to pull a random fact from the API.
  // https://cat-fact.herokuapp.com/facts/random
  // 1. Call the API
  // 2. Parse the result
  // 3. Put the fact in the response
  const alexa_says = 'Hey there.'
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
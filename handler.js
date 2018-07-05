'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});


module.exports.s3_thumbnail_generator = (event, context, callback) => {
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

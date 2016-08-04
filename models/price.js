//const API_URL = 'http://10.242.248.169:7000/predict?crim=2&age=2&dis=5'
const API_URL = process.env.API_URL || 'http://localhost:4000/predict'
const request         = require('request');

//Calls the API to get the data and put it in res.data
function getPrice(req,res,next) {
  console.log('req.body = ', req.body);
  let queryData = {
    crim: req.query.crim,
    age: req.query.age,
    dis: req.query.dis
  };
  
  console.log('data = ', queryData)
  request({
      url: API_URL, //URL to hit
      qs: queryData, //Query string data
      method: 'GET', //Specify the method
      json: true
  }, function(error, response, data){
      if(error) {
        console.log(error);
      } else {
        console.log(response.statusCode, data);
        res.data = data
        next();
      }
  });
}

module.exports = { getPrice }
//const API_URL = 'http://10.242.248.169:7000/predict?crim=2&age=2&dis=5'
const API_URL = 'http://10.242.248.169:7000/predict'

function getPrice(req,res,next) {
  console.log('req.body = ', req.body);
  let queryParams = merge(req.body, req.query);
  let data;
  
  console.log('data_url = ', data_url)
  request({
      url: API_URL, //URL to hit
      qs: queryParams, //Query string data
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
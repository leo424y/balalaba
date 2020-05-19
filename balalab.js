var url = require('url');

exports.helloWorld = (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

  if (query.message === undefined) {
    res.status(400).send('No message defined!');
  } else {
    console.log(query.message);
    let result = query.message.split('');
    let final_result = '';
    for (let i = 0; i < result.length-1; i+=2) {
      if (getRandomInt(3) == 0 && (result[i+1] != undefined)) {
        final_result += result[i+1] + result[i];
      }
      else {
        final_result += result[i] + result[i+1];
      }
    }
    final_result += result[result.length-1];
    res.status(200).send('balalaba: ' + final_result);
  }
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
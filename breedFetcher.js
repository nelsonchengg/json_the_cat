const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) { callback(error, null); return; }
    if (data.length === 0) {callback(`${breed} not found.`, null); return; }
    if (breed) { callback(null, data[0]["description"]); return; }
  });
};


module.exports = { fetchBreedDescription };
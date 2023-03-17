const arg = process.argv.slice(2);
const request = require('request');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) throw error;
  console.log(data[0]["description"]);
});
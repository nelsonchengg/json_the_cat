const { fetchBreedDescription } = require('./breedFetcher');
const request = require('request');
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
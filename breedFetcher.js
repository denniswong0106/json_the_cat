const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  const apiPath = "https://api.thecatapi.com/v1/breeds/search?q=";
  const query = apiPath + breedName;

  request(query, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'breed not found');
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  const apiPath = "https://api.thecatapi.com/v1/breeds/search?q=";
  const query = apiPath + breedName;

  request(query, (error, response, body) => {
    if (error !== null) {
      console.log(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('breed not found');
    } else {
      console.log(data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
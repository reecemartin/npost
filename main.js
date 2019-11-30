'use strict';

// Dependencies
const axios = require('axios');
var method = "";

if (process.argv[2] === '-g') {
    method = "get";
}

if (method === "get")
    axios.get(process.argv[3])
    .then(response => {
        console.log("Method Selected: " + method);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });

// Test API Call https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
'use strict';

// Dependencies
const axios = require('axios');
var method = "";
var log = "";

if (process.argv[2] === '-g') {
    method = "get";
}

if (process.argv[4] === '-l') {
    log = "flag";
}

if (method === "get")
    axios.get(process.argv[3])
    .then(response => {
        console.log(log)
        if (log === "flag") 
            console.log("Method Selected: " + method);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });

// Test API Call https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
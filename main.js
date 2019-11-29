'use strict';

// Dependencies
const axios = require('axios');

axios.get(process.argv[2])
    .then(response => {
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });
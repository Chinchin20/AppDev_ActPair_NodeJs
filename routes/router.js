const express = require('express');
const anna = express.Router();
const cal = require('../controller/CalapaController');

// Route for displaying the form (index.ejs)
anna.get('/', (req, res) => {
    res.render('index'); // Render the form page when the root URL is accessed
});

// Route for saving form data
anna.post('/save', cal.save);

// Route for displaying the list of saved data
anna.get('/list', cal.index); // This route will show the list page when accessed

module.exports = anna;

const paris = require('../model/ParisModel');

const ty = {
    // Display the list of entries
    index: (req, res) => {
        // Fetch data from the database and render it in 'list.ejs'
        paris.getAll((err, data) => {
            if (err) throw err;
            res.render('list', { data }); // Render the list view with data
        });
    },

    // Save the form data
    save: (req, res) => {
        const data = req.body;
        paris.save(data, (err) => {
            if (err) throw err;
            res.redirect('/'); // Redirect to the index page after saving
        });
    }
};

module.exports = ty;

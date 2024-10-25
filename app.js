const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const anna = require('./routes/router'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use('/', anna); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

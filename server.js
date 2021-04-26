const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Database connection with mongoose

mongoose
    .connect('mongodb://localhost/node_test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('db connection established'))
    .catch((err) => console.log(err));

// const formidable = require('express-formidable');
// app.use(formidable);

app.use(express.json());

//
app.use('/public', express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

// Importing Main Route Table
app.use('', require('./main_routes'));
// default error handler
function errorHandle(err, req, res, next) {
    if (res.headerSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

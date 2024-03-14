//imports
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config.env'});
const session = require('express-session');
const router = require('./routes/snapshotroutes');
const userRouter = require('./routes/userroutes');
const helmet = require('helmet');
const path = require('path');
// Express app setup
const app = express();

// Middleware
app.use(morgan('tiny'));

// access to stylesheets, images 
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//session middleware
app.use(session({
    secret: 'mysecretstring123',
    resave: false,
    saveUninitialized: false
}));

// Helmet middleware for additional security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://code.jquery.com", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "http://www.w3.org/2000/svg"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "http://www.w3.org/2000/svg"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "https://www.google.com", "http://www.w3.org/2000/svg", "data:"],
            scriptSrcAttr: ["'unsafe-inline'"]
        }
    }
}));

// Middleware to prevent caching sensitive pages
app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});
//Routing
app.use('/', router);
app.use('/', userRouter);

// set the current template engine
app.set('view engine', 'ejs');

//error handling
app.use('*', (req, res) => {
    res.status(404).render('error404');
});

//Server Listening
app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);

    console.log(`Express listening on port ${process.env.PORT}`);
});
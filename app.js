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

const app = express();

app.use(morgan('tiny'));
// access to stylesheets, images 
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mysecretstring123',
    resave: false,
    saveUninitialized: false
}));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://code.jquery.com", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "http://www.w3.org/2000/svg"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com", "http://www.w3.org/2000/svg"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "https://www.google.com", "http://www.w3.org/2000/svg"],
        scriptSrcAttr: ["'unsafe-inline'"]
        }
    }

}));
app.use('/', router);
app.use('/', userRouter);

// set the current template engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);

    console.log(`Express listening on port ${process.env.PORT}`);
});
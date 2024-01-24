const express = require('express');
const morgan = require('morgan');
const PORT = 3000;

var app = express();
// set the current template engine
app.set('view engine', 'ejs');

// access to images, css stylesheets 
app.use(express.static(__dirname + '/public'));



app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200);
    //res.sendFile(__dirname + '/html/welcome.html');
    res.render('addsnapshot', { first_name: "Rachel", timeofday: "afternoon" });
    });

// route for 404 page not found - should always be at the end 
app.get('*', (req, res) => {
    res.status(404);
    res.send('<h1>Page not found!</h1>');
    });

app.listen(PORT, (err) => {
    if (err)
        return console.log(err);
    console.log(`Express Web Server listening on http://localhost:${PORT}`);
});
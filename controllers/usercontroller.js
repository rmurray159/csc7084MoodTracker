// connection to database
const conn = require('./../util/dbconn');

// put the get and post requests in here for the user routes

// get landing page (index) 
exports.getHomepage = (req, res) => {
    res.render('index');
};

// get login page
exports.getLogin = (req, res) => {
    res.render('login');
};

// get register page
exports.getRegister = (req, res) => {
    res.render('register');
};

//get logout page   
exports.getLogout = (req, res) => {
    res.render('logout');
};
// connection to database
const conn = require('./../util/dbconn');

// bcrypt for password hashing
const bcrypt = require('bcrypt');

// put the get and post requests in here for the user routes

// get landing page (index) 
exports.getHomepage = (req, res) => {
    res.render('index');
};

// get login page
exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getRegister = (req, res) => {
    // You can include other logic if needed

    // Check if there is an error message passed as a query parameter
    const message = req.query.error;

    res.render('register', { message });
};

//get register success page
exports.getRegisterSuccess = (req, res) => {
    res.render('registersuccess');
};

//get logout page   
exports.getLogout = (req, res) => {
    res.render('logout');
};




// post register page
exports.postRegister = (req, res) => {
    const { first_name, last_name, email_address, password } = req.body;
    console.log(req.body);
    // server side validation
    if (!first_name || !last_name || !email_address || !password) {
        console.log('Validation failed - Please provide all fields');
        const message = "Please provide all fields";
        return res.status(400).redirect('/register?error=' + encodeURIComponent(message));
    }

    
    // check if email exists
    const checkemailSQL = `SELECT email_address FROM user WHERE email_address = ?`;
    conn.query(checkemailSQL, [email_address], (err, results) => {
        if (err) {
            console.error('Error checking email existence:', err);
            throw err;
        }
        if (results.length > 0) {
            console.log('Email already exists');
            const message = "Email already exists";
            return res.redirect('/register?error=' + encodeURIComponent(message)); 
        }


        // hash the password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                throw err;
            }
            // insert the user into the database
            const insertSQL = `INSERT INTO user (first_name, last_name, email_address, password) VALUES (?, ?, ?, ?)`;
            conn.query(insertSQL, [first_name, last_name, email_address, hash], (err, results) => {
                if (err) {
                    throw err;
                }
                return res.render('registersuccess', {
                    message: 'User registered'
                });
            });
        });
    }
    );
}

// connection to database
const conn = require('./../util/dbconn');

// bcrypt for password hashing
const bcrypt = require('bcrypt');

// using express validator
const { validationResult } = require('express-validator');  

// get landing page (index) 
exports.getHomepage = (req, res) => {
    res.render('index');
};

// get about page
exports.getAbout = (req, res) => {
    res.render('aboutus');
};

//get contact page
exports.getContact = (req, res) => {
    res.render('contact');
};

// get login page
exports.getLogin = (req, res) => {
    const message = req.query.error;
    res.render('login', { errors: null, message });
};

exports.getRegister = (req, res) => {
    // Check if there is an error message passed as a query parameter
    const message = req.query.error;

    // using express-validator, get the validation errors
    const errors = validationResult(req).array();

    res.render('register', { errors, message });
};

//get register success page
exports.getRegisterSuccess = (req, res) => {
    res.render('registersuccess');
};

//get logout  
exports.getLogout = (req, res) => {
    req.session.destroy(() => {
        console.log('User logged out');
        res.redirect('/');
    });
};

// get change password page
exports.getChangePassword = (req, res) => {
    const message = req.query.error;
    res.render('changepassword', { errors: null, message });
};

// post register page
exports.postRegister = (req, res) => {

    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
        return res.status(422).render('register', { errors: errors.array(), message: null });
    }

    const { first_name, last_name, email_address, password } = req.body;
    console.log(req.body);
    
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

// post login page
exports.postLogin = (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
        return res.status(422).render('login', { errors: errors.array(), message: null });
    }

    const { email_address, password } = req.body;
    const vals = [email_address, password];
    console.log(vals);

    // check if email exists
    const checkemailSQL = `SELECT * FROM user WHERE email_address = ?`;
    conn.query(checkemailSQL, [email_address], (err, results) => {
        console.log(results);
        if (err) {
            console.error('Error checking email existence:', err);
            throw err;
        }
        if (results.length === 0) {
            console.log('Email does not exist');
            const message = "Email does not exist";
            return res.redirect('/login?error=' + encodeURIComponent(message));
        }

        // compare the password
        bcrypt.compare(password, results[0].password, (err, result) => {
            if (err) {
                throw err;
            }
            if (result) {
                console.log('Password match');
                // set session
                const session = req.session;
                session.isLoggedIn = true;
                session.user_id = results[0].user_id;
                const loggedInUser = results[0];
                req.session.user = loggedInUser;

                console.log(session);

                // set original url
                var originalUrl = req.session.route;
                console.log(`postLogin: originalUrl: ${originalUrl}`);

                if (!originalUrl) {
                    originalUrl = '/new';
                }  else {
                    originalUrl = originalUrl;
                }
                
                return res.redirect(`${originalUrl}`);
            } else {
                console.log('Password does not match');
                const message = "Password does not match";
                return res.status(422).render('login', { errors: null, message: message });
            }
        });
    });
};

// post change password page
exports.postChangePassword = (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());

    if (!errors.isEmpty()) {
        return res.status(422).render('changepassword', { errors: errors.array(), message: null });
    }

    const { email_address, current_password, new_password } = req.body;
    console.log(req.body);

    const validateCredentialsSQL = `SELECT * FROM user WHERE email_address = ?`;
    conn.query(validateCredentialsSQL, [email_address], (err, results) => {
        if (err) {
            console.error('Error validating credentials:', err);
            return res.status(500).render('changepassword', { errors: null, message: 'Internal Server Error' });
        }

        if (results.length === 0) {
            // User with the provided email does not exist
            return res.status(404).render('changepassword', { errors: null, message: 'Email does not exist' });
        }

        const storedHashedPassword = results[0].password;
        bcrypt.compare(current_password, storedHashedPassword, (err, passwordMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).render('changepassword', { errors: null, message: 'Internal Server Error' });
            }

            if (!passwordMatch) {
                // Current password is incorrect
                return res.status(401).render('changepassword', { errors: null, message: 'Incorrect current password' });
            }

            bcrypt.hash(new_password, 10, (err, hash) => {
                if (err) {
                    console.error('Error hashing new password:', err);
                    return res.status(500).render('changepassword', { errors: null, message: 'Internal Server Error' });
                }

                const updateSQL = `UPDATE user SET password = ? WHERE email_address = ?`;
                conn.query(updateSQL, [hash, email_address], (err, results) => {
                    if (err) {
                        console.error('Error updating password:', err);
                        return res.status(500).render('changepassword', { errors: null, message: 'Internal Server Error' });
                    }

                    return res.render('login', { errors: null, message: 'Password change successful' });
                });
            });
        });
    });
};



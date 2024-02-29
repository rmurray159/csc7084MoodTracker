// connection to database
const conn = require('./../util/dbconn'); 

// using express validator
const { validationResult } = require('express-validator');  

// put the get and post requests in here for the snapshot routes

// get add new snapshot
exports.getAddNewSnapshot = (req, res) => {
    const { isLoggedIn, user } = req.session;
    const errorMessage = req.query.error;
    console.log(`User logged in: ${isLoggedIn ? 'yes' : 'no'}`);
    res.render('addsnapshot', { isLoggedIn, loggedInUser: user, errorMessage });
}

// get snapshot list
exports.getSnapshotList = (req, res) => {
    const { isLoggedIn, user } = req.session;
    console.log(`User logged in: ${isLoggedIn ? 'yes' : 'no'}`);
    //retrieve user_id from session
    const user_id = req.session.user_id;
    console.log('user_id from session:', user_id);
    const vals = [user_id];
    const selectSQL = `SELECT * FROM snapshot  WHERE user_id = ? ORDER BY timestamp DESC`;
    
    conn.query(selectSQL, vals, (err, snapshotlist) => {
        if (err) {
            throw err;
        }
        console.log('info from database for snapshot list');
        console.log(snapshotlist);
        res.render('snapshotlist', { snapshots: snapshotlist, isLoggedIn, loggedInUser: user});
    });
};

// get snapshot stats
exports.getSnapshotStats = (req, res) => {
    const { isLoggedIn, user } = req.session;
    console.log(`User logged in: ${isLoggedIn ? 'yes' : 'no'}`);
    //retrieve user_id from session
    const user_id = req.session.user_id;
    console.log('user_id from session:', user_id);
    const vals = [user_id];
    const selectSQL = `SELECT * FROM snapshot
                            INNER JOIN snapshot_trigger ON
                            snapshot.snapshot_id = snapshot_trigger.snapshot_id
                            WHERE snapshot.user_id = ? ORDER BY timestamp`;

    conn.query(selectSQL, vals, (err, results) => {
        if (err) throw err;

        const labels = results.map(entry => entry.timestamp);
        const data = results.map(entry => [ entry.enjoyment_level, entry.surprise_level, entry.contempt_level, entry.sadness_level, entry.fear_level, entry.disgust_level, entry.anger_level ]);

        // fetch triggers and their counts 
        const triggerSQL = `SELECT trigger_id, COUNT(*) as count FROM snapshot_trigger WHERE snapshot_id IN (SELECT snapshot_id FROM snapshot WHERE user_id = ?) GROUP BY trigger_id ORDER BY count DESC LIMIT 5`;
        conn.query(triggerSQL, vals, (err, triggerResults) => {
            if (err) throw err;
            console.log('Trigger results:', triggerResults);
            const triggerLabels = triggerResults.map(entry => entry.trigger_id);
            const triggerData = triggerResults.map(entry => entry.count);
            console.log('Trigger labels:', triggerLabels);
            console.log('Trigger data:', triggerData);
            res.render('stats', { labels, data, triggerLabels, triggerData, isLoggedIn, loggedInUser: user});
            
        });
    });
};




// get selected snapshot to delete
exports.getDeleteSingleSnapshot = (req, res) => {
    console.log('params from list page');
    console.log(req.params);
    const snapshotId = req.params.snapshotid;
    const vals =[ snapshotId ]
    console.log(snapshotId);

    const selectSQL = `SELECT * FROM snapshot
                        INNER JOIN snapshot_trigger ON 
                        snapshot.snapshot_id = snapshot_trigger.snapshot_id
                        WHERE snapshot.snapshot_id = ?`;

    conn.query(selectSQL, vals, (err, snapshotdetail) => {
        if (err) {
            throw err;
        } else {
            console.log('info from database for snapshot detail');
            console.log(snapshotdetail);
            res.render('deletesnapshot', { details: snapshotdetail });
        }
    });

}

// get selected snapshot to edit
exports.getEditSnapshot = (req, res) => {
    console.log('params from list page');
    console.log(req.params);
    const snapshotId = req.params.snapshotid;
    const vals =[ snapshotId ]
    console.log(snapshotId);

    const selectSQL = `SELECT * FROM snapshot
                        INNER JOIN snapshot_trigger ON 
                        snapshot.snapshot_id = snapshot_trigger.snapshot_id
                        WHERE snapshot.snapshot_id = ?`;

    conn.query(selectSQL, vals, (err, snapshotdetail) => {
        if (err) {
            throw err;
        } else {
            console.log('info from database for snapshot detail');
            console.log(snapshotdetail);
            res.render('editsnapshot', { details: snapshotdetail });
        }
    });

}

// get summary snapshot
exports.getSummarySnapshot = (req, res) => {
    const { isLoggedIn, user } = req.session;
    console.log(`User logged in: ${isLoggedIn ? 'yes' : 'no'}`);

    const { snapshotId } = req.params;
    const vals =[ snapshotId ]
    console.log(snapshotId);

    const selectSQL = `SELECT * FROM snapshot
                        INNER JOIN snapshot_trigger ON 
                        snapshot.snapshot_id = snapshot_trigger.snapshot_id
                        WHERE snapshot.snapshot_id = ?`;

    conn.query(selectSQL, vals, (err, snapshotdetail) => {
        if (err) {
            throw err;
        } else {
            console.log('info from database for snapshot detail');
            console.log(snapshotdetail);
            res.render('snapshotsummary', { details: snapshotdetail, isLoggedIn, loggedInUser: user});
        }
    });
    
}

// post  new snapshot 
exports.postNewSnapshot = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('addsnapshot', { errors: errors.array(), message: null });
    }

    // Check for error query parameter
    const errorMessage = req.query.error;
    if (errorMessage) {
        // Handle the error message (e.g., display it in the view)
        return res.render('addsnapshot', { errorMessage });
    }
    
    const user_id = req.session.user_id;
    const { slider1, slider2, slider3, slider4, slider5, slider6, slider7, notes } = req.body;

    console.log('Received form data:', req.body);

    // Insert form values into the database 
    const vals = [ slider1, slider2, slider3, slider4, slider5, slider6, slider7, user_id, notes];
    
    const insertSQL = `INSERT INTO snapshot (enjoyment_level, surprise_level, contempt_level, sadness_level, fear_level, disgust_level, anger_level, user_id, timestamp, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)`;


    conn.query(insertSQL, vals, (err, rows) => {
        if (err) {
            throw err;
        } 
        console.log('Data inserted into the database:', rows);

        //Get the last inserted snapshot_id
        const snapshotId = rows.insertId;

        //Checkboxes processing
        const checkboxValues = [];

        // Check the 12 checkboxes (would need to be adjusted if change number of checkboxes)
        for (let i = 1; i <=12; i++) {
            const checkboxName = `checkbox${i}`; //
            const checkboxValue = req.body[checkboxName];

            console.log(`Checkbox ${i}:`, checkboxName, checkboxValue);

            // Check if the checkbox is checked chatGPT snipped for it isArray
            if (Array.isArray(checkboxValue) ? checkboxValue[1] === 'on' : checkboxValue === 'on') {
            const actualValue = parseInt(req.body[`checkbox_value${i}`], 10);
            checkboxValues.push([snapshotId, actualValue]);
            }
        }

        console.log('Checkbox values:', checkboxValues);

        if (checkboxValues.length > 0) {
            // Insert checkbox values into database
            const checkboxSQL = 'INSERT INTO snapshot_trigger (snapshot_id, trigger_id) VALUES ?';
            conn.query(checkboxSQL, [checkboxValues], (checkboxErr, checkboxResult) => {
                if (checkboxErr) {
                    // Handle error appropriately
                    console.error('Error inserting checkbox values into the database:', checkboxErr);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Checkbox values inserted into the database:', checkboxResult);
                // Send a response to the client or perform additional actions as needed
                //console.log(snapshotId);
                res.redirect(`/summary/${snapshotId}`);
                
            });
        } else {
        // No checkboxes selected, proceed without inserting checkbox values
        // Send a response to the client or perform additional actions as needed
        //console.log(snapshotId);    
        res.redirect(`/summary/${snapshotId}`);
         
    }

  });

};


// post delete snapshot
exports.postDeleteSnapshot = (req, res) => {
    const snapshotId = req.params.snapshotid;
    console.log('snapshot id to delete:', snapshotId);

    conn.beginTransaction((err) => {
        if (err) {
            throw err;
        }

        const deleteSnapshotTriggerSQL = `DELETE FROM snapshot_trigger WHERE snapshot_id = ?`;
        const deleteSnapshotSQL = `DELETE FROM snapshot WHERE snapshot_id = ?`;

        conn.query(deleteSnapshotTriggerSQL, [snapshotId], (err, result) => {
            if (err) {
                return conn.rollback(() => {
                    throw err;
                });
            }

            conn.query(deleteSnapshotSQL, [snapshotId], (err, result) => {
                if (err) {
                    return conn.rollback(() => {
                        throw err;
                    });
                }

                conn.commit((err) => {
                    if (err) {
                        return conn.rollback(() => {
                            throw err;
                        });
                    }

                    console.log('snapshot deleted:', result);
                    res.redirect('/list');
                });
            });
        });
    });
};

// post edit shapshot
exports.postEditSnapshot = (req, res) => {
    const snapshotId = req.params.snapshotid;
    console.log('snapshot id to edit:', snapshotId);

    const deleteSQL = `DELETE FROM snapshot_trigger WHERE snapshot_id = ?`;

    conn.query(deleteSQL, snapshotId, (err, rows) => {
        if (err) {
            throw err;
        } 
        console.log('Data deleted from triggers table', rows);

        //Checkboxes processing
        const checkboxValues = [];

        // Check the 12 checkboxes (would need to be adjusted if change number of checkboxes)
        for (let i = 1; i <=12; i++) {
            const checkboxName = `checkbox${i}`; //
            const checkboxValue = req.body[checkboxName];

            console.log(`Checkbox ${i}:`, checkboxName, checkboxValue);

             // Check if the checkbox is checked chatGPT snipped for it isArray
            if (Array.isArray(checkboxValue) ? checkboxValue[1] === 'on' : checkboxValue === 'on') {
            const actualValue = parseInt(req.body[`checkbox_value${i}`], 10);
            checkboxValues.push([snapshotId, actualValue]);
            }
        }

        console.log('Checkbox values:', checkboxValues);

        if (checkboxValues.length > 0) {
            // Insert checkbox values into database
            const checkboxSQL = 'INSERT INTO snapshot_trigger (snapshot_id, trigger_id) VALUES ?';
            conn.query(checkboxSQL, [checkboxValues], (checkboxErr, checkboxResult) => {
                if (checkboxErr) {
                    // Handle error appropriately
                    console.error('Error inserting checkbox values into the database:', checkboxErr);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Checkbox values inserted into the database:', checkboxResult);
                // Send a response to the client or perform additional actions as needed
                //console.log(snapshotId);
                res.redirect(`/list`);
            
            });
        } else {
            // No checkboxes selected, proceed without inserting checkbox values
            // Send a response to the client or perform additional actions as needed
            //console.log(snapshotId);    
            res.redirect(`/list`);
        }
    });
};
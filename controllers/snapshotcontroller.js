// connection to database
const conn = require('./../util/dbconn'); 

// put the get and post requests in here 

// get internal landing page (index) 
exports.getHomepage = (req, res) => {
    res.render('index');
};

// get login page

// get register page 

// get snapshots 

// get add new snapshot
exports.getAddNewSnapshot = (req, res) => {
    res.render('addsnapshot');
}

// get select snapshot

// get summary snapshot
exports.getSummarySnapshot = (req, res) => {

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
            res.render('snapshotsummary', { details: snapshotdetail });
        }
    });
    
}

// post  new snapshot 
exports.postNewSnapshot = (req, res) => {
    const user_id = 1; // will need to get this from the session when it's done
    const { slider1, slider2, slider3, slider4, slider5, slider6, slider7, notes } = req.body;

    console.log('Received form data:', req.body);

    // Determine if the notes box has an entry inlcuded (code snippet from ChatGPT)
    //const includeNotes = notes && notes.trim() !== ''; // Check if notes is not empty

    // Insert form values into the database 
    const vals = [ slider1, slider2, slider3, slider4, slider5, slider6, slider7, user_id, notes];
    
    const insertSQL = `INSERT INTO snapshot (enjoyment_level, surprise_level, contempt_level, sadness_level, fear_level, disgust_level, anger_level, user_id, timestamp, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)`;
     
    // if (includeNotes) {
    //     vals.push(notes);
    // };

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

// post edit shapshot

// post delete snapshot 
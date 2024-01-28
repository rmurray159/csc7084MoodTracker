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

// handle form submission of a new snapshot 
exports.postNewSnapshot = (req, res) => {
    const user_id = 1; 
    const { slider1, slider2, slider3, slider4, slider5, slider6, slider7, notes } = req.body;
    
    // // Parse checkbox values as integers
    // const checkbox1Value = parseInt(checkbox1, 10) || 0;
    // const checkbox2Value = parseInt(checkbox2, 10) || 0;
    // const checkbox3Value = parseInt(checkbox3, 10) || 0;

    // // Check the state of the checkboxes
    // const checkbox1Checked = checkbox1Value !== 0;
    // const checkbox2Checked = checkbox2Value !== 0;
    // const checkbox3Checked = checkbox3Value !== 0;

    // Determine if the notes box has an entry inlcuded (code snippet from ChatGPT)
    const includeNotes = notes && notes.trim() !== ''; // Check if notes is not empty

    // Insert form values into the database 
    const vals = [ slider1, slider2, slider3, slider4, slider5, slider6, slider7, user_id];
    
    const insertSQL = `INSERT INTO snapshot (enjoyment_level, surprise_level, contempt_level, sadness_level, fear_level, disgust_level, anger_level, user_id, timestamp, ${includeNotes ? 'notes' : ''}) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ${includeNotes ? '? ' : ''} )`;
     
    if (includeNotes) {
        vals.push(notes);
    }

    conn.query(insertSQL, vals, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log('Data inserted into the database', rows);
        }
    });
};

// post edit shapshot

// post delete snapshot 
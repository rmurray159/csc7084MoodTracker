
const allowedCharacters = /^[a-zA-Z0-9@#$%^&*'()_+{}\[\]:;<>,.?~\/ \n-]+$/;


// validateInput middleware
exports.validateInput = (req, res, next) => {
    const userInput = req.body.notes;

    if (!allowedCharacters.test(userInput)) {
        const errorMessage = encodeURIComponent('Notes contains disallowed characters');
        return res.status(422).redirect(`/new?error=${errorMessage}`);
    }

    next();
};


module.exports = function(app, userModel) {
    app.post("/api/em/user", register);
    app.post("/api/em/userlogin", verifyLogin);
    app.post("/api/em/userpreference", savePreference);

    function register(req, res) {
        var user = req.body;
        userModel.createUser(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }

    function verifyLogin(req, res) {
        var user = req.body;
        userModel.findUserByCredential(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }


    function savePreference(req, res) {
        var user = req.body;
        userModel.updateUserPreferences(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }
}
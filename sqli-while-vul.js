var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var p = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");

    var q = "";
    while (q=="") {
        q="SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
    }

    return db.one(q);
});
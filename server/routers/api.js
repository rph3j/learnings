const express = require('express');
const router = express.Router();
const dbAction = require("../actions/dbActions.js");
const bodyParser = require('body-parser').json(); // you neeed pody parser if you wont read post data sending raw josn!

router.post('/LogIn', bodyParser, dbAction.LogIn); //return user email and password.
router.post('/getFullData', bodyParser , dbAction.getFullData); //return full user data.
router.post('/createUser', dbAction.createUser); 


module.exports = router;

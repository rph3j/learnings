const express = require('express');
const router = express.Router();
const dbAction = require("../actions/dbActions.js");
const bodyParser = require('body-parser').json(); // you neeed pody parser if you wont read post data sending raw josn!

router.post('/LogIn', bodyParser, dbAction.LogIn); //return user email and password.
router.post('/getFullData', bodyParser , dbAction.getFullData); //return full user data.
router.post('/getTasks', bodyParser , dbAction.getTasks); //return tasks.
router.post('/postAnswer', bodyParser , dbAction.postAnswer); //return tasks.
router.post('/getStudnetsResult', bodyParser , dbAction.getStudnetsResult); //return Studnets Result.
router.get('/getStudents', bodyParser , dbAction.getStudentsLists); //return StudentsList.
router.post('/createUser', dbAction.createUser); 


module.exports = router;

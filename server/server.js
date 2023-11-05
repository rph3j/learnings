const express = require('express');
const BP = require('body-parser');
const  cors = require('cors');

const server = express();
const apiRouter = require('./routers/api.js');

server.use(cors());
server.use(BP.urlencoded({ extended: false }));
server.use('/api/', apiRouter);

server.listen(3001, () => {
    console.log("Server listening at port 3001!");
})
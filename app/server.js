const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/main.html'));
});

router.get('/v2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/v2.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
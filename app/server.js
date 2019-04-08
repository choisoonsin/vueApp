const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use('/images', express.static(__dirname + '/images'));  // add static source

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

router.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/main.html'));
});

router.post('/login.do', function(req, res){
    for(var prop in req.body){
        console.log(req.body[prop]);
    }
    res.send({status:"200", forward:"/login"});
    // res.sendFile(path.join(__dirname + '/views/main.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4201;
const bodyParser = require('body-parser');
const express_jwt = require('express-jwt');
const jwt = require('jsonwebtoken');

let secret = 'adasdasd';

let users = [
    { name: 'janko', password: '123', id: 1, bio: 'Ja som janko'}
];

function getUserByName(name) {
    for(let key in users){
        if(users[key].name === name){
            return users[key];
        }
    }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getToken = function fromHeaderOrQuerystring(req) {
    if (req.headers.Authorization && req.headers.Authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.body && req.body.token) {
        return req.query.token;
    }
    return null;
}

const crossOrigin = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
};

// just to simulate real server
const timeout = function (req, res, next) {
    setTimeout(() => {
        next();
    }, 2000);
}

app.use(crossOrigin);

const jwt_middleware = express_jwt({ secret: secret });

let enabledUsers = ['janko'];

app.post('/api/login', timeout, (req, res) => {
        
    let user;
    
    for(let key in users){
        if(users[key].name === req.body.name && users[key].password === req.body.password){
            user = users[key];
            break;
        }
    }

    if(user){
        let token = jwt.sign(user, secret);
        res.json({ token: token });
    } else {
        res.json({ error: 'Username is invalid.' });
    }

});

app.post('/api/get_profile', jwt_middleware, timeout, (req, res) => {
    let userName = req.user.name;
    let user = getUserByName(userName);
    res.json(user);

});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
})
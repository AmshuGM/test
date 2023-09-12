const express = require('express');
const user_route = express();
const session = require('express-session');
const bodyparser = require('body-parser');
const config = require('../config/config');
const auth = require("../middleware/auth");
user_route.use(session({secret:config.sessionsecret, resave: true,
    saveUninitialized: true}));
user_route.set('view wngine','ejs');
user_route.set('views','./view');
user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended:true}));
const userController = require('../controlller/userController');

user_route.get('/index',auth.islogout,userController.loadRegister);
user_route.get('/secondpage_admin',auth.islogin,userController.loadsecond_admin);
user_route.get('/secondpage',auth.islogin,userController.loadsecond);
user_route.get('/logout',auth.islogin,userController.logout);

// Club Id Routes - 

user_route.get('/events/:eventId', userController.fetchEvents);

// user_route.get('/secondpage_admin',userController.loadsecond);

user_route.post('/index',userController.insertUser);
user_route.post('/index2',userController.verifyLogin);
user_route.get('/events',userController.fetchEvents)


module.exports = user_route;
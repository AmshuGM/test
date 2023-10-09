const express = require('express');
const user_route = express();
//added this comment to test
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
user_route.get('/events/Code_IO',auth.islogin,userController.loadCodeio);
user_route.get('/events/protocol',auth.islogin,userController.loadProtocol);
user_route.get('/events/ise',auth.islogin,userController.loadIse);
user_route.get('/events/augmentai',auth.islogin,userController.loadAugmentai);
user_route.get('/events/IEEEcs',auth.islogin,userController.loadIEEEcs);
// Club Id Routes - 


// user_route.get('/secondpage_admin',userController.loadsecond);

user_route.post('/index',userController.insertUser);
user_route.post('/index2',userController.verifyLogin);
//create event
user_route.get('/createEvent',auth.islogin,userController.createForm);
user_route.post('/createEvent',auth.islogin,userController.submitEvent);
user_route.post('/register-event/:eventId',auth.islogin,userController.register_event);


module.exports = user_route;

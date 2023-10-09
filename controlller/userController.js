const userModel = require('../models/userModel');
//const user = require('../models/userModel');

const bcrypt = require('bcrypt');

const user = userModel.Users;
const events = userModel.Events;
const Clubs = userModel.Clubs;

const securePass = async(password)=>{
    const spass = await bcrypt.hash(password,10);
    return spass;
}

const loadRegister = async(req,res)=>{
    try {
     res.render('index');

        
    } catch (error) {
        console.log(error.message);
        
    }
}
const loadsecond_admin = async(req,res)=>{
    try {
     const {name,usn,section} = await user.findById({_id:req.session.user_id});
     res.render('secondpage_admin',{name,usn,section});
// comment
        
    } catch (error) {
        console.log(error.message);
         
    }
}
const loadsecond = async(req,res)=>{
    try {
     const {name,usn,section} = await user.findById({_id:req.session.user_id});
     res.render('secondpage',{name,usn,section});
// comment
        
    } catch (error) {
        console.log(error.message);
        
    }
}
const insertUser = async(req,res)=>{
    try {
        const spass = await securePass(req.body.pass);
        const User =  new user({
            name:req.body.name,
            email:req.body.email,
            section:req.body.section,
            usn:req.body.usn,
            isAdmin:req.body.isAdmin, 
            password:spass
        }
       
        );
        const checkUser = await user.findOne({email:User.email});
        if(checkUser)res.render('index',{message:"User already exists! Please login to continue"});
        else{
         const userData= await User.save();
        if(userData){
            res.render('secondpage_admin',{name:User.name,usn:User.usn,section:User.section});
        }
    } 
    } catch (error) {
        console.log(error.message)
        
    }
}
const verifyLogin = async(req,res)=>{
    try {
        const email = req.body.email;
        const pass = req.body.pass;
        const UserData = await user.findOne({email:email});
        if(UserData){

           const match =  await bcrypt.compare(pass,UserData.password);
            if(match){
                req.session.user_id= UserData._id;
                if(UserData.isAdmin)
                res.redirect('secondpage_admin');
                else
                res.redirect('secondpage');

                // res.render('secondpage_admin',{name:UserData.name,usn:UserData.usn,section:UserData.section});
            }
            else {
                res.render('index',{message:"password or email is incorrect"});
            }
       }
        else {
            res.render('index',{message:"user not found , please sign up"});
        }
    } catch (error) {
        console.log(error);
        
    }
}
const logout = async(req,res)=>{
    try {
        req.session.destroy();
        res.redirect('index');
    } catch (error) {
        console.log(error);
        
    }
}


  
const createForm = async (req,res) =>
{
    try 
    {
        res.render('createForm');
        
    } catch (error) {
        console.log(error);
        
    }
}
const submitEvent = async (req, res) => {
    try {
        // Assuming you have a mongoose model named 'EventModel'
        const event = {
            eventName: req.body.eventName,
            eventDesc: req.body.eventDesc,
        };

        // console.log(req.body.eventName, req.body.eventDescription);

        // Find the club with the given clubName to get its clubId
        const clubName = req.body.clubName; // Assuming req.body.clubName contains the clubName
        const targetClub = await Clubs.findOne({ name: clubName }).exec();

        if (targetClub) {
            // If the club with the matching clubName is found, get its clubId
            event.clubId = targetClub._id;

            // Save the event to the 'events' collection
            const savedEvent = await events.create(event);

            if (savedEvent) {
                res.render('createForm');
            } else {
                // Handle the case where event creation fails
                res.render('createForm');
            }
        } else {
            // Handle the case where the club with the matching clubName was not found
            res.render('createForm');
        }
    } catch (error) {
        console.log(error.message);
    }
};


const loadCodeio = async (req, res) => {
    try {
        // Check if user is logged in and has a valid session
        if (!req.session || !req.session.user_id) {
            return res.status(401).send('Unauthorized'); // Handle unauthorized access
        }

        // Get the currently logged-in user's ID from the session
        const userId = req.session.user_id;

        // Find the "code_io" club by its name (assuming it's unique)
        const protocolClub = await Clubs.findOne({ name: 'code_io' }).exec();

        if (!protocolClub) {
            return res.status(404).send('Club not found');
        }

        // Find the user's document
        const User = await user.findById(userId).exec();

        if (!User) {
            return res.status(404).send('User not found');
        }

        // Extract the user's registrations
        const userRegistrations = User.registrations || [];

        // Find event details for each registration
        const myEvent = await Promise.all(userRegistrations.map(async (registration) => {
            const event = await events.findById(registration.eventId).exec();
            return event;
        }));

        // Filter userRegistrations for the given club (code_io)
        const filteredMyEvent = myEvent.filter((event) => {
            return event.clubId.toString() === protocolClub._id.toString();
        });

        // Find all events related to the "code_io" club
        const allCodeIoEvents = await events.find({ clubId: protocolClub._id }).exec();
        
        // Render the EJS template with the retrieved data
        res.render('code_io', {
            myEvent: filteredMyEvent, // Pass myEvent to the template
            allCodeIoEvents,isAdmin:User.isAdmin,
        });
    } catch (error) {
        console.error('Error handling code_io page:', error);
        res.status(500).send('Internal Server Error');
    }
};
const loadProtocol = async (req, res) => {
    try {
        // Check if user is logged in and has a valid session
        if (!req.session || !req.session.user_id) {
            return res.status(401).send('Unauthorized'); // Handle unauthorized access
        }

        // Get the currently logged-in user's ID from the session
        const userId = req.session.user_id;

        // Find the "code_io" club by its name (assuming it's unique)
        const protocolClub = await Clubs.findOne({ name: 'protocol' }).exec();

        if (!protocolClub) {
            return res.status(404).send('Club not found');
        }

        // Find the user's document
        const User = await user.findById(userId).exec();

        if (!User) {
            return res.status(404).send('User not found');
        }

        // Extract the user's registrations
        const userRegistrations = User.registrations || [];

        // Find event details for each registration
        const myEvent = await Promise.all(userRegistrations.map(async (registration) => {
            const event = await events.findById(registration.eventId).exec();
            return event;
        }));

        // Filter userRegistrations for the given club (code_io)
        const filteredMyEvent = myEvent.filter((event) => {
            return event.clubId.toString() === protocolClub._id.toString();
        });

        // Find all events related to the "code_io" club
        const allCodeIoEvents = await events.find({ clubId: protocolClub._id }).exec();
        
        // Render the EJS template with the retrieved data
        res.render('protocol', {
            myEvent: filteredMyEvent, // Pass myEvent to the template
            allCodeIoEvents,isAdmin:User.isAdmin,
        });
    } catch (error) {
        console.error('Error handling code_io page:', error);
        res.status(500).send('Internal Server Error');
    }
};


const register_event = async (req, res) => {
    try {
        // Check if user is logged in and has a valid session
        if (!req.session || !req.session.user_id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Get the user ID from the session
        const userId = req.session.user_id;
        const eventId = req.params.eventId;

        // Find the user document by ID
        const User = await user.findById(userId).exec();

        if (!User) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is already registered for the event
        const existingRegistration = User.registrations.find(registration => registration.eventId.toString() === eventId);

        if (existingRegistration) {
            return res.status(400).json({ message: 'User is already registered for the event' });
        }

        // Add the event registration to the user's document
        User.registrations.push({ eventId });
        await User.save();

        // Assuming registration was successful, send a success response
        res.status(200).json({ message: 'Event registration successful' });
    } catch (error) {
        console.error('Error registering for the event:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




module.exports = {loadRegister,insertUser,verifyLogin,loadsecond,loadsecond_admin,logout,submitEvent,createForm,loadCodeio,loadProtocol,register_event};
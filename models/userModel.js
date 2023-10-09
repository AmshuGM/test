// const mongoose = require('mongoose');

// const usersSchema = new mongoose.Schema({

//     email:{type:String,required:true},
//     usn:{type:String,required:true},
//     password:{type:String,required:true},
//     name:{type:String,required:true},
//     section:{type:String,required:true},
//     isAdmin:{type:String,default:0},
//     myEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Events',default:[]}]
//     });

// const eventsSchema = new mongoose.Schema({

//     eventId:{type: String,required:true},
//     events:[
//         {
//             eventName: {type: String, required: true},
//             eventDesc: {type: String, required: true},
//         }
//     ],
// });

// const Users = mongoose.model('users', usersSchema);
// const Events = mongoose.model('events', eventsSchema);

// module.exports = {
//     Users,
//     Events,
// }
const mongoose = require('mongoose');

// Users Schema (with modifications)
const usersSchema = new mongoose.Schema({
    email: { type: String, required: true },
    usn: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    section: { type: String, required: true },
    isAdmin: { type: String, default: '0' }, // Changed default value to string
    registrations: [
        {
            eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Events', required: true },
            registrationDate: { type: Date, default: Date.now },
            
        },
    ],
});

// Events Schema (with modifications)
const eventsSchema = new mongoose.Schema({
    clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clubs', required: true }, // Added clubId
    eventName: { type: String, required: true },
    eventDesc: { type: String, required: true },
    googleFormLink: { type: String, required: false },
});

// Clubs Schema
const clubsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // ... other club-related fields
});

const Users = mongoose.model('users', usersSchema);
const Events = mongoose.model('events', eventsSchema);
const Clubs = mongoose.model('clubs', clubsSchema);

module.exports = {
    Users,
    Events,
    Clubs,
};

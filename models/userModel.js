const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

    email:{type:String,required:true},
    usn:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    section:{type:String,required:true},
    isAdmin:{type:String,default:0},
    myEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Events',default:[]}]
    });

const eventsSchema = new mongoose.Schema({

    eventId:{type: String,required:true},
    events:[
        {
            eventName: {type: String, required: true},
            eventDesc: {type: String, required: true},
        }
    ],
});

const Users = mongoose.model('users', usersSchema);
const Events = mongoose.model('events', eventsSchema);

module.exports = {
    Users,
    Events,
}
const mongoose = require('mongoose');
const path = require('path')
const username = "devopsprojectbmsce"; //create shared username for database
const password = "devops_project";
const cluster = "devopsproject.m86dhzw";
const dbname = "devops_project";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const express = require('express')
const app = express();
app.use(express.static(path.join(__dirname,'./view/styles')));
const userRoute= require('./routes/userRoutes');
app.set('view engine','ejs');
app.set('view','./view')
app.use('/',userRoute);

app.listen(3000,()=>{
    console.log("the app is running in http://localhost:3000/index")
});
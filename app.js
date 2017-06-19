/**
 * Created by tushitjain on 6/18/17.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const route = require('./routes/route');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/MeanApp1');

mongoose.connection.on('connected' , function () {
    console.log('Connected to database mongoDB @ 27017');
});

mongoose.connection.on('error' , function (err) {
    if(err){
        console.log('Error in connecting DB : '+err);
    }

});
const port = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use('/api',route);

app.get('/',function (req,res) {
    res.send('foobar');
});

app.listen(port,function(){
     console.log("Server started at port: "+port);
 });

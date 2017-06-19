/**
 * Created by tushitjain on 6/18/17.
 */
const express= require('express');
const router = express.Router();

const Contact = require('../models/contacts');
//retreiving the data
router.get('/contacts',function(req,res,next){
    Contact.find(function (err,contacts) {
        res.json(contacts);
    })
});

//add the data
router.post('/contact',function(req,res,next){
    var newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save(function(err,contact){
        if(err){
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }


    })
});

//delete the data
router.delete('/contact/:id' , function (req,res,next) {
    Contact.remove({
        _id: req.params.id
    },function (err,result) {
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})

module.exports = router;
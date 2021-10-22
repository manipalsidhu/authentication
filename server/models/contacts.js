// <!-- File: contacts.js Created by: Manipal Singh Sidhu - Student Number: 300859319 - Created on: October 22, 2021 -->

let mongoose = require('mongoose');

// model class
let contactModel = mongoose.Schema({
    Contact_Name: String,
    Contact_Number: String,
    Email_Address: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contactModel);
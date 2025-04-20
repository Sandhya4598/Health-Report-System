// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  username: String,
  password: String,
  age:Number,
  images: [String], // this is your image array (base64 strings)
});

module.exports = mongoose.model('Report', reportSchema);

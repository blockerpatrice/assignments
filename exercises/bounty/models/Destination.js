const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationScehma = new Schema ({
      fname:String,
      lname:String,
      living:Boolean,
      bounty:Number,
      type:String,
})

module.exports = mongoose.model('bounties', destinationScehma)
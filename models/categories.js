const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Categoryschema = new Schema({
    name:{
        type: String,
        required: true
    },
  } ,{ timestamps: true });
const Category = mongoose.model('Category',Categoryschema);
module.exports = Category;
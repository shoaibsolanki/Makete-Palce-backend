const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Productschema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    quantity:{
     type: Number,
     required:true,
    },
    category:{
     type: String,
     required:true,
    },
    price:{
        type: Number,
        required: true,
    },
  } ,{ timestamps: true });
const Product = mongoose.model('Product',Productschema);
module.exports = Product;
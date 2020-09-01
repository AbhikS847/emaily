const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId:String,
    credits:{
        type:Number,
        default:0
    }

})

mongoose.model('users',userSchema);


//model that creates a collection inside the database created
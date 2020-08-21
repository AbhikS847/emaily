const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId:String,

})

mongoose.model('users',userSchema);


//model that creates a collection inside the database created
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }]
});

const User = mongoose.model("User",userSchema);
export default User;
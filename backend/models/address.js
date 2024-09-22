import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    AddressLine1:{
        type:String,
        required:true
    },
    AddressLine2:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true,
        maxlength:6
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }

});

const Address = mongoose.model("Address",addressSchema);
export default Address;
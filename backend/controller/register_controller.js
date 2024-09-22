import Address from "../models/address.js";
import User from "../models/user.js";

export const register = async(req,res)=>{
    const {fullname,AddressLine1,AddressLine2,State,Country,PinCode} = req.body;
    try {
        let user = await User.findOne({fullname});
        if(user){
            const newAddress = new Address({
                AddressLine1,
                AddressLine2,
                State,
                Country,
                PinCode,
                user:user._id
            });

            const savedAddress = await newAddress.save();
            user.address.push(savedAddress._id);
            await user.save();
            return res.status(201).json({message:"added successfully"})
        }
        const newUser = new User({ fullname });

        // Create a new address
        const newAddress = new Address({
            AddressLine1,
            AddressLine2,
            State,
            Country,
            PinCode,
            user:newUser._id
        });
        const savedAddress = await newAddress.save();
        newUser.address.push(savedAddress._id);
        await newUser.save();

        res.status(201).json({ message: 'New user created with address', newUser });
    } catch (error) {
        res.status(404).json({error:'error in the controller'});
        console.log(error);
    }
}

export const getregister = async(req,res)=>{
    try {
        const users = await User.find().populate("address");

        if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({error:'error in the controller'});
        console.log(error);
    }
}
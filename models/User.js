import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config();


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})


//secure password with bcrypt
usersSchema.pre('save', async function(){
      const user = this;
      if(!user.isModified('password')){
        next();
      }
      try {
        const saltRound = 10;
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password= hash_password;
      } catch (error) {
        console.error(error);
      }
})

usersSchema.methods.generateToken = async function(){
     try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        },
    );
     } catch (error) {
        console.error(error);
     }
};

const User = mongoose.model('User', usersSchema);
export default User;

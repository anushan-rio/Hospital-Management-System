import mongoose from 'mongoose';

var OtpSchema=new mongoose.Schema({
    Emergency_Email:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1h'  // This document will expire 1 hour after the createdAt time
    }

})

export const Otpmodel = mongoose.model('Otp', OtpSchema);
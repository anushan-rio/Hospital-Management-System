import mongoose from 'mongoose';
import { v1 as uuidv1 } from 'uuid';
import crypto from 'crypto';


var DoctorSchema=new mongoose.Schema({
    DoctorID:{
        type:String,
        required:true,
        trim:true
    },
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        trim:true
    },
    encry_password:{
        type:String,
        required:true,
        trim:true
    },
    salt:String,
    Specialization:{
        type:String,
        required:true,
        trim:true
    },
    Phno:{
        type:Number,
        trim:true,
        maxlength:10,
        required:true
    },
    Availability:{
        type:String,
        enum:['Available','NotAvailable']
    },
    Role:{
        type:String,
        default:'Doctor'
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


DoctorSchema.methods= {
    
    authenticate: function(plainpassword){   
        return this.securePassword(plainpassword)=== this.encry_password
    },
    securePassword: function(plainpassword){
        if(!plainpassword)return ""
    try {
        return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (error) {
        return ""
    }}
}

//Virtual Password
DoctorSchema.virtual("password")
    .set(function(password){
        this._passsword=password;
        this.salt=uuidv1();
        this.encry_password= this.securePassword(password);
    })
    .get(function(){
    return this._passsword;
    })

export const Doctors = mongoose.model('Doctor', DoctorSchema);
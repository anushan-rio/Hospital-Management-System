import mongoose from 'mongoose';
import { v1 as uuidv1 } from 'uuid';
import crypto from 'crypto';


var userSchema=new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    HospitalName:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    encry_password:{
        type:String,
        require:true,
        trim:true
    },
    salt:String,
    Role:{
        type:String,
        enum:['Admin','Doctor','Patient']
    },
    Isverified:{
        type: Boolean,
        default: false,
    },
    Phno:{
        type:Number,
        trim:true,
        maxlength:10,
        required:true
    },
    Doctor_Exp:{
        type:Number,
        trim:true,
    },
    Doctor_Speciality:{
        type:String,
        trim:true
    }
    
},
{timestamps:true}
)

userSchema.methods= {

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
userSchema.virtual("password")
    .set(function(password){
        this._passsword=password;
        this.salt=uuidv1();
        this.encry_password= this.securePassword(password);
    })
    .get(function(){
    return this._passsword;
    })

export const User = mongoose.model('User', userSchema);
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
        default:0
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
    }
    
},
{timestamps:true}
)

userSchema.methods={
    
    autheticate: function(plainpassword) {
        return this.securepassword(plainpassword) === this.encry_password;
    },
    
    securepassword:function(plainpassword){
        if(!plainpassword){
            return "";
        }
        try{
            return crypto
            .createHmac("sha256", this.salt)
            .update(plainpassword)
            .digest("hex");
            
        }
        catch(err){
            console.log("if4")
            return "";
        }
    }
}

userSchema.virtual("password")
    .set(function(password){
        this._passsword=password;
        this.salt=uuidv1();
        this.encry_password=this.securepassword(password);
    })
    .get(function(){
    return this._passsword;
    })

export const User = mongoose.model('User', userSchema);

//export default User;



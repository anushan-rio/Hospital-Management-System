import mongoose from "mongoose";


var PatientSchema=new mongoose.Schema({
    Patient_id:{
        type:String,
        required:true,
        trim:true
    },
    Patient_Name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    Patient_Age:{
        type:Number,
        required:true,
        trim:true
    },
    Patient_Gender:{
        type:String,
        required:true,
        enum: ['male', 'female', 'other'],
        trim:true
    },
    Patient_Contact: {
        Emergency_contact_number:{
            type: Number,
            required:true,
            trim:true,
            maxlength:10
        },
        Emergency_Email:{
            type: String,
            // required:true,
            trim:true
        }
    },
    Patient_Address: {
        Street:{
            type: String,
            // required:true,
            trim:true,
            maxlength:32
        },        
        City:{
            type: String,
            // required:true,
            trim:true,
            maxlength:32
        },
        State:{
            type: String,
            // required:true,
            trim:true,
            maxlength:32
        }
    },
    Nationality:{
        type: String,
        // required:true,
        trim:true,
        maxlength:32
    },
    Appointments:{
        type:[String],
        default:[]
    },
    Role:{
        type:String,
        default:2
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        
    }
},{timestamps:true}
)


export const Patient = mongoose.model('Patient', PatientSchema);
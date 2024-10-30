import nodemailer from 'nodemailer';
import {EMAIL,EMAIL_PASSWORD} from "../constant.js"

//Genarate OTP  
export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);

};


// Email Configuration
export async function sendOtpEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL, 
            pass: EMAIL_PASSWORD    
        }
    });

    
    const mailOptions = {
        from: EMAIL, 
        to: email,                    
        subject: 'Your OTP Code',     
        text: `Your OTP code is: ${otp}` 
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


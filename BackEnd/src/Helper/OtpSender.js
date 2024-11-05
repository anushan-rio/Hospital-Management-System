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
        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> OTP Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #FFFFFF;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; background-color: #FFFFFF; border-radius: 8px;">
        <h2 style="color: #4CAF50; text-align: center;">Welcome to Our Community!</h2>
        <p style="font-size: 16px; line-height: 1.5; text-align: center;">
            Thank you for signing up! Please confirm your Email to start receiving updates from us.
        </p>
        <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 14px; color: #555;"></p>
            <input type="text" value="${otp}" id="optInLink" style="padding: 10px; width: 100%; border: 1px solid #ddd; border-radius: 5px; text-align: center;" readonly />
            
        </div>
        <p style="font-size: 14px; color: #777; text-align: center;">
            If you did not request this, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="font-size: 12px; color: #888; text-align: center;">
        </p>
        </div>
    </body>
    </html>
    `,
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}



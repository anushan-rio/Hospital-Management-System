import { body, validationResult } from 'express-validator';
import { validateResult } from "../Middleware/Validation.MiddleWare.js"


export const RegisterValidator = [
    body('Email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid Email address'),

    body('HospitalName')
        .notEmpty().withMessage('HospitalName is required')
        .withMessage('Please enter a valid HospitalName address'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('password is required'),

    body('Phno')
        .isLength({ min: 10 }).withMessage('Please enter a valid Phno ')
        .notEmpty().withMessage('Phno is required'),
];

export const SigninValidator = [
    body('Email')
    .notEmpty().withMessage('Email required')
    .isEmail().withMessage('Please Enter a Valid Email address'),


    body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .notEmpty().withMessage('password is required')
    
]

export const SendOtpValidator=[
    body('Emergency_Email')
    .notEmpty().withMessage('Email is required')

]

export const OtpValidator=[
    body('otp')
        .notEmpty().withMessage('otp is required')
]
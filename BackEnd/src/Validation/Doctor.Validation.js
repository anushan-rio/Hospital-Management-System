import { body, validationResult } from 'express-validator';
import { validateResult } from "../Middleware/Validation.MiddleWare.js"


export const DoctorValidation = [
    body('DoctorID')
        .notEmpty().withMessage('DoctorID is required'),

    body('Name')
        .notEmpty().withMessage('Name is required'),

    body('Email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid Email address'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('password is required'),

    body('Specialization')
        .notEmpty().withMessage('Specialization is required'),

    body('Phno')
        .isLength({ min: 10 }).withMessage('Phno is required')
        .notEmpty().withMessage('Phno is required'),

];

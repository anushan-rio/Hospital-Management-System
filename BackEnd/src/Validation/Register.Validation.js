import { body, validationResult } from 'express-validator';
import { validateResult } from "../Middleware/Validation.MiddleWare.js"


export const RegisterValidator = [
    body('Email')
        .notEmpty().withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid Email address'),

    body('HospitalName')
        .notEmpty().withMessage('HospitalName is required')
        .withMessage('Please enter a valid HospitalName address'),

    body('password')
        .isLength({ min: 6 })
        .notEmpty().withMessage('password is required')
        .withMessage('Password must be at least 6 characters long'),

        body('Phno')
        .isLength({ min: 10 })
        .notEmpty().withMessage('Phno is required')
        .withMessage('Please enter a valid Phno '),
];
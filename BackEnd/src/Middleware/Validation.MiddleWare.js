
//validation checking functionality 
import { validationResult } from 'express-validator';

export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       // const messages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


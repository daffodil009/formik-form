import React from 'react';

import * as Yup from 'yup'; // Import Yup for validation

const initialValues = {
    name: "",
    category: "",
    expiry_date: "",
    quantity: "",
};

// Define the regex pattern as a constant
const textPattern = /^[A-Za-z]+$/;

// Define the validation schema

export const signupSchema = Yup.object().shape({

    name: Yup.string()
         .transform(value => {
            if (value) {
                return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            }
            return value;
        })
        
        .min(3)
        .max(15)
        .matches(textPattern, 'Name can only contain letters')
    .required('Name is required'),
    

    category: Yup.string()
         .required('Category is required'),
    
    
    
    expiry_date: Yup.date().required('Expiry date is required')
    .min(new Date(), 'Expiry date must be in the future'),


    quantity: Yup.number()
        .required('Quantity is required')
        .min(1, 'Quantity must be at least 1')
        .max(99, 'Quantity must be at most 99' )
        .positive('Quantity must be positive')
        .integer('Quantity must be an integer'),
});

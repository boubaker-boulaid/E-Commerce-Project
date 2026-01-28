const required = (fieldName) => (value) => 
    !value || value.trim() === '' ? `${fieldName} is required` : '';

const minLength = (fieldName,min) => (value) => 
    value.length < min ? `${fieldName} must be at least ${min} chars !` : '';

const email = (fieldName) => (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return value && !emailRegex.test(value) ? `Invalid ${fieldName} adress!` : '';
}

const matches = (fieldName,targetFeildName) => (value,allValues) => {
    const targetValue = allValues[targetFeildName];
    return value !== targetValue ? `${fieldName} must matche ${targetFeildName} !` : '';
}
    


export const loginValidationRules = {
    email: [required('email'), email('email')],
    password: [minLength('password',8)],
}

export const registerValidationRules = {
    name: [required('name'), minLength('name',3)],
    ...loginValidationRules,
    password_confirmation: [matches('password_confirmation','password')]
}
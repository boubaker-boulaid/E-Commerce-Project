const required = (fieldName) => (value) => {
    if (value === null || value === undefined) return `${fieldName} is required`;
    if (typeof value === 'string' && value.trim() === '') return `${fieldName} is required`;
    return '';
};

const minLength = (fieldName, min) => (value) =>
    value && value.length < min ? `${fieldName} must be at least ${min} chars !` : '';

const email = (fieldName) => (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return value && !emailRegex.test(value) ? `Invalid ${fieldName} adress!` : '';
}

const matches = (fieldName, targetFeildName) => (value, allValues) => {
    const targetValue = allValues[targetFeildName];
    return value !== targetValue ? `${fieldName} must matche ${targetFeildName} !` : '';
}

const imageRequired = (fieldName) => (value) =>
    !value ? `${fieldName} is required` : '';

export const isNbr = (fieldName) => (value) =>
    value && isNaN(Number(value)) ? `${fieldName} must be a number` : '';

export const nbrPositive = (fieldName) => (value) =>
    value && Number(value) < 0 ? `${fieldName} must be positive` : '';



export const loginValidationRules = {
    email: [required('email'), email('email')],
    password: [required('password'),minLength('password', 8)],
};

export const registerValidationRules = {
    name: [required('name'), minLength('name', 3)],
    ...loginValidationRules,
    password_confirmation: [required('password'),matches('password_confirmation', 'password')]
};

export const productValidationRules = {
    name: [required('name')],
    brand: [required('brand')],
    category: [required('category')],
    price: [required('price'), isNbr('price'), nbrPositive('price')],
    stock: [required('stock'), isNbr('stock'), nbrPositive('stock')],
    primaryImage: [imageRequired('primaryImage')]
};
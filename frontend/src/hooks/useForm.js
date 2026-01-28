import { useState } from "react"

export const useForm = (initialData, validationRules, onValidSubmit) => {
    const [formData, setFormData] = useState(initialData);
    const [formErrors, setFormErrors] = useState({});

    const validateField = (fieldName, fieldValue) => {
        const rules = validationRules[fieldName];

        if (!rules) return null;

        for (const rule of rules) {
            const fieldError = rule(fieldValue, formData);
            if (fieldError) return fieldError;
        }

        return null;
    }

    const validateForm = () => {
        const newFormErrors = {};

        Object.keys(validationRules).forEach(fieldName => {
            const fieldError = validateField(fieldName, formData[fieldName]);
            if (fieldError) newFormErrors[fieldName] = fieldError;
        })

        setFormErrors(newFormErrors);

        return Object.keys(newFormErrors).length === 0;
    }

    const handleChange = (e) => {
        const {value, name} = e.target;

        setFormData(prev => ({...prev,[name]:value}));

        const err = validateField(name, value);
        setFormErrors(prev => ({...prev, [name]: err}));
    }

    const resetForm = () => {
        setFormData(initialData);
        setFormErrors({});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onValidSubmit(formData, resetForm);
        }
    }

    return {
        formData,
        formErrors,
        handleChange,
        resetForm,
        handleSubmit
    }
}
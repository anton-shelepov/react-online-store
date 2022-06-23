
import { requiredInput, correctEmail, passwordsMustMatch, maxLengthPassword, minLengthPassword, nameMustBeCorrect } from './ValidationMessages';
import * as yup from 'yup';


export const profileEditSchema = yup.object().shape({
    email: yup
        .string()
        .email(correctEmail)
        .trim()
        .required(requiredInput),
    fullName: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .matches(/^[а-яa-zА-ЯA-Z-]{0,}\s[а-яa-zА-ЯA-Z-]{1,}(\s[а-яa-zА-ЯA-Z-]{1,})?$/, nameMustBeCorrect),
    address: yup.string(),
    phone: yup.string().test(
        'phone-is-valid',
        function (value, { createError, path }) {
            return (value?.charAt(value.length - 1)) === '_'
                ? createError({
                    message: 'Введите корректный телефон',
                    path,
                })
                : true
        }
    ),
    oldPassword: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .min(8, minLengthPassword(8))
        .max(20, maxLengthPassword(20)),
    newPassword: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .min(8, minLengthPassword(8))
        .max(20, maxLengthPassword(20)),
    confirmPassword: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .oneOf([yup.ref("newPassword")], passwordsMustMatch),
})


export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email(correctEmail)
        .trim()
        .required(requiredInput),

    password: yup
        .string()
        .required(requiredInput)
        .min(8, minLengthPassword(8))
        .max(20, maxLengthPassword(20))
})


export const registrationSchema = yup.object().shape({
    email: yup
        .string()
        .email(correctEmail)
        .trim()
        .required(requiredInput),
    fullName: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .matches(/^[а-яa-zА-ЯA-Z-]{0,}\s[а-яa-zА-ЯA-Z-]{1,}(\s[а-яa-zА-ЯA-Z-]{1,})?$/, nameMustBeCorrect),
    phone: yup.string().test(
        'phone-is-valid',
        function (value, { createError, path }) {
            return (value?.charAt(value.length - 1)) === '_'
                ? createError({
                    message: 'Введите корректный телефон',
                    path,
                })
                : true
        }
    ),
    password: yup
        .string()
        .required(requiredInput)
        .min(8, minLengthPassword(8))
        .max(20, maxLengthPassword(20)),
    confirmPassword: yup
        .string()
        .required(requiredInput)
        .oneOf([yup.ref("password")], passwordsMustMatch),
})

export const createProductSchema = yup.object().shape({
    title: yup
        .string()
        .required(requiredInput),
    mainSpecs: yup
        .string()
        .required(requiredInput),
    isInStock: yup
        .string()
        .required(requiredInput),
    price: yup
        .number()
        .required(requiredInput),
    discount: yup
        .number()
        .nullable()
})
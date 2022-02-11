
import { requiredInput, correctEmail, passwordsMustMatch, maxLengthPassword, minLengthPassword, nameMustBeCorrect } from './ValidationMessages';
import * as yup from 'yup';
import { StringSchema } from 'yup';


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
        .matches(/^[A-Za-zА-Яа-я](?! )(?!(?:.* ){3}).+$/, nameMustBeCorrect),
    address: yup.string(),
    phone: yup.string(),
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








// yup.addMethod<StringSchema>(yup.string, "minimum", function(number: number, errorMessage: string) {
//     return this.test(`test-from`, errorMessage, function(value) {
//         const { path, createError } = this;
//         return (
//             (value === '' || value!.length > number) || createError({path, message: errorMessage})
//         )
//     })
// }) 
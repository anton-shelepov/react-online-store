
import { requiredInput, correctEmail, passwordsMustMatch, maxLengthPassword, minLengthPassword } from './ValidationMessages';
import * as yup from 'yup';
import { StringSchema } from 'yup'; 


yup.addMethod<StringSchema>(yup.string, "minimum", function(number: number, errorMessage: string) {
    return this.test(`test-from`, errorMessage, function(value) {
        const { path, createError } = this;

        return ( 
            (value === '' || value!.length > number) || createError({path, message: errorMessage})
        )
    })
}) 

export const profileEditSchema = yup.object().shape({
    email: yup.string().email(correctEmail).required(requiredInput),
    full_name: yup.string(),
    country: yup.string(),
    phone: yup.string(),
    //@ts-ignore for custom method - minimum (not working with TS)
    old_password: yup.string().minimum(8, minLengthPassword(8)).max(20, maxLengthPassword(20)), 
    //@ts-ignore for custom method - minimum (not working with TS)
    new_password: yup.string().minimum(8, minLengthPassword(8)).max(20, maxLengthPassword(20)), 
    confirm_password: yup.string().oneOf([yup.ref("new_password"), null], passwordsMustMatch), 
})
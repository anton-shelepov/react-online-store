import { ISignupRequestData, ISigninRequestData } from './auth-api-types.d';
import { instance } from ".."

const basePath = '/auth'

export const auth = {

    userSignin(formData: ISigninRequestData) {
        return instance.post(`${basePath}/signin`, { ...formData })
    },

    userSignup(formData: ISignupRequestData) {
        return instance.post(`${basePath}/signup`, { ...formData })
    }
} 
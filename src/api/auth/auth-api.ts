import { privateClient } from "..";
import { ISigninRequestData, ISignupRequestData } from './auth-api-types.d';

const basePath = '/auth'

export const auth = {

    userSignin(formData: ISigninRequestData) {
        return privateClient.post(`${basePath}/signin`, formData)
    },

    userSignup(formData: ISignupRequestData) {
        return privateClient.post(`${basePath}/signup`, formData)
    }
} 
import { ILoginForm } from '../../../components/_common/Forms/AuthForms/LoginForm';
import { IRegistrationForm } from '../../../components/_common/Forms/AuthForms/RegistrationForm';
import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./authActionsTypes" 


export const userSigninRequest = (formData: ILoginForm) =>
({
    type: USER_SIGNIN_REQUEST,
    formData
})

export const userSigninSuccess = (access_token: string) =>
({
    type: USER_SIGNIN_SUCCESS,
    access_token
})

export const userSigninFailure = (error: string | unknown) =>
({
    type: USER_SIGNIN_FAILURE,
    error
})

export const userSignupRequest = (formData: IRegistrationForm) =>
({
    type: USER_SIGNUP_REQUEST,
    formData
})

export const userSignupSuccess = (access_token: string) =>
({
    type: USER_SIGNUP_SUCCESS,
    access_token
})

export const userSignupFailure = (error: string | unknown) =>
({
    type: USER_SIGNUP_FAILURE,
    error
})


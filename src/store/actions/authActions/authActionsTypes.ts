import { ISigninRequestData, ISignupRequestData } from './../../../api/auth/auth-api-types.d';


// Combine all of auth interfaces in one type
export type AuthActionTypes =
    IUserSigninRequest |
    IUserSigninSuccess |
    IUserSigninFailure |
    IUserSignupRequest |
    IUserSignupSuccess |
    IUserSignupFailure


// Auth interfaces
export interface IUserSigninRequest {
    type: typeof USER_SIGNIN_REQUEST;
    formData: ISigninRequestData
}
export interface IUserSigninSuccess {
    type: typeof USER_SIGNIN_SUCCESS;
    access_token: string
}
export interface IUserSigninFailure {
    type: typeof USER_SIGNIN_FAILURE;
    error: string | unknown
}
export interface IUserSignupRequest {
    type: typeof USER_SIGNUP_REQUEST;
    formData: ISignupRequestData
}
export interface IUserSignupSuccess {
    type: typeof USER_SIGNUP_SUCCESS;
    access_token: string
}
export interface IUserSignupFailure {
    type: typeof USER_SIGNUP_FAILURE;
    error: string | unknown
}

export const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST"
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS"
export const USER_SIGNIN_FAILURE = "USER_SIGNIN_FAILURE"

export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST"
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS"
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE"

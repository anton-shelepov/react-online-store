export interface ISigninRequestData {
    email: string
    password: string
}

export interface ISignupRequestData {
    email: string
    password: string
    fullName?: string
    phone?: string 
}
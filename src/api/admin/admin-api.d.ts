export interface ICreateCategoryRequestData {
    image: any
    icon: any
    linkName: string
    categoryName: string
}

export interface ISignupRequestData {
    email: string
    password: string
    fullName?: string
    phone?: string 
}
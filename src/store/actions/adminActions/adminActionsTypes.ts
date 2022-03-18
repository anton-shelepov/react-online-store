import { ICreateCategoryRequestData } from './../../../api/admin/admin-api.d';


export type AdminActionsTypes =
    ICreateCategoryRequest |
    ICreateCategorySuccess |
    ICreateCategoryFailure

export interface ICreateCategoryRequest {
    type: typeof CREATE_CATEGORY_REQUEST,
    formData: ICreateCategoryRequestData
}
export interface ICreateCategorySuccess {
    type: typeof CREATE_CATEGORY_SUCCESS,
    response: any
}
export interface ICreateCategoryFailure {
    type: typeof CREATE_CATEGORY_FAILURE,
    error: string | unknown
}

export const CREATE_CATEGORY_REQUEST = "CREATE_CATEGORY_REQUEST"
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS"
export const CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE"
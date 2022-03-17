import { ICreateCategoryRequestData } from './../../../api/admin/admin-api.d';


export type AdminActionsTypes =
    createCategoryRequest |
    createCategorySuccess |
    createCategoryFailure

export interface createCategoryRequest {
    type: typeof CREATE_CATEGORY_REQUEST,
    formData: ICreateCategoryRequestData
}
export interface createCategorySuccess {
    type: typeof CREATE_CATEGORY_SUCCESS,
    response: any
}
export interface createCategoryFailure {
    type: typeof CREATE_CATEGORY_FAILURE,

}

export const CREATE_CATEGORY_REQUEST = "CREATE_CATEGORY_REQUEST"
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS"
export const CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE"
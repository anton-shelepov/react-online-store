import { ICreateCategoryRequestData } from './../../../api/admin/admin-api.d';
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./adminActionsTypes"


export const createCategoryRequest = (formData: ICreateCategoryRequestData) =>
({
    type: CREATE_CATEGORY_REQUEST,
    formData
})

export const createCategorySuccess = (response: any) =>
({
    type: CREATE_CATEGORY_SUCCESS,
    response
})

export const createCategoryFailure = (error: {message: string | unknown}) =>
({
    type: CREATE_CATEGORY_FAILURE,
    error
})

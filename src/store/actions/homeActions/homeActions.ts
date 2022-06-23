import { FETCH_POPULAR_PRODUCTS_REQUEST, FETCH_POPULAR_PRODUCTS_FAILURE, FETCH_POPULAR_PRODUCTS_SUCCESS } from './homeActionsTypes';
export const addDiscountItem = () => {
    
}

export const fetchPopularProductsRequest = () => ({
    type: FETCH_POPULAR_PRODUCTS_REQUEST
})

export const fetchPopularProductsSuccess = (data: any) => ({
    type: FETCH_POPULAR_PRODUCTS_SUCCESS,
    data
})

export const fetchPopularProductsFailure = (error: string | unknown) => ({
    type: FETCH_POPULAR_PRODUCTS_FAILURE,
    error
})
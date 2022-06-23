export const ADD_DISCOUNT_ITEM = "ADD_DISCOUNT_ITEM"


export type HomeActionTypes =
    IFetchPopularProductsRequest |
    IFetchPopularProductsSuccess |
    IFetchPopularProductsFailure
export interface IFetchPopularProductsRequest {
    type: typeof FETCH_POPULAR_PRODUCTS_REQUEST
}
export interface IFetchPopularProductsSuccess {
    type: typeof FETCH_POPULAR_PRODUCTS_SUCCESS
    data: any
}
export interface IFetchPopularProductsFailure {
    type: typeof FETCH_POPULAR_PRODUCTS_FAILURE,
    error: string | unknown
}

export const FETCH_POPULAR_PRODUCTS_REQUEST = "FETCH_POPULAR_PRODUCTS_REQUEST"
export const FETCH_POPULAR_PRODUCTS_SUCCESS = "FETCH_POPULAR_PRODUCTS_SUCCESS"
export const FETCH_POPULAR_PRODUCTS_FAILURE = "FETCH_POPULAR_PRODUCTS_FAILURE"
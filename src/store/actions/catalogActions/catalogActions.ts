import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FETCH_CATEGORY_PRODUCTS_FAILURE, FetchCategoryProductsSuccessData } from './catalogActionsTypes';


export type CatalogActionTypes =
    ReturnType<typeof fetchCategoryProductsRequest>

export const fetchCategoryProductsRequest = (categoryName: string, queryPage?: string) =>
({
    type: FETCH_CATEGORY_PRODUCTS_REQUEST,
    categoryName,
    queryPage
})

export const fetchCategoryProductsSuccess = (data: FetchCategoryProductsSuccessData) =>
({
    type: FETCH_CATEGORY_PRODUCTS_SUCCESS,
    data
})

export const fetchCategoryProductsFailure = (error: string | unknown) =>
({
    type: FETCH_CATEGORY_PRODUCTS_FAILURE,
    error
})


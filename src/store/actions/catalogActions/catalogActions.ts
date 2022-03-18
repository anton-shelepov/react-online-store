import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FETCH_CATEGORY_PRODUCTS_FAILURE, FetchCategoryProductsSuccessData, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from './catalogActionsTypes';



// Fetch categories actions

export const fetchCategoriesRequest = () =>
({
    type: FETCH_CATEGORIES_REQUEST
})

export const fetchCategoriesSuccess = (data: FetchCategoryProductsSuccessData) =>
({
    type: FETCH_CATEGORIES_SUCCESS,
    data
})

export const fetchCategoriesFailure = (error: string | unknown) =>
({
    type: FETCH_CATEGORIES_FAILURE,
    error
})

// Fetch products actions

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
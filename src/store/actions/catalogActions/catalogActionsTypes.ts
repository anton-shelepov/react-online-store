import { ProductsItem } from './../../../types/catalogTypes.d';

export type CatalogActionsTypes =
    IFetchCategoryProductsRequest |
    IFetchCategoryProductsSuccess |
    IFetchCategoryProductsFailure |
    IFetchCategoriesRequest |
    IFetchCategoriesSuccess |
    IFetchCategoriesFailure


// Fetch categories
export interface IFetchCategoriesRequest {
    type: typeof FETCH_CATEGORIES_REQUEST
}
export interface IFetchCategoriesSuccess {
    type: typeof FETCH_CATEGORIES_SUCCESS
    data: any
}
export interface IFetchCategoriesFailure {
    type: typeof FETCH_CATEGORIES_FAILURE
    error: string | unknown
}

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'


// Fetch products
export interface IFetchCategoryProductsRequest {
    type: typeof FETCH_CATEGORY_PRODUCTS_REQUEST
    categoryName: string
    queryPage?: string
}
export interface IFetchCategoryProductsSuccess {
    type: typeof FETCH_CATEGORY_PRODUCTS_SUCCESS
    data: FetchCategoryProductsSuccessData
}

export type FetchCategoryProductsSuccessData = {
    categoryProducts: ProductsItem[],
    productsCount: { _count: { _all: number } },
    pageSize: number
}

export interface IFetchCategoryProductsFailure {
    type: typeof FETCH_CATEGORY_PRODUCTS_FAILURE
    error: string | unknown
}

export const FETCH_CATEGORY_PRODUCTS_REQUEST = 'FETCH_CATEGORY_PRODUCTS_REQUEST'
export const FETCH_CATEGORY_PRODUCTS_SUCCESS = 'FETCH_CATEGORY_PRODUCTS_SUCCESS'
export const FETCH_CATEGORY_PRODUCTS_FAILURE = 'FETCH_CATEGORY_PRODUCTS_FAILURE'
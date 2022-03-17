import { ProductsItem } from './../../../types/catalogTypes.d';

export type FetchCategoryProducts =
    IFetchCategoryProductsRequest |
    IFetchCategoryProductsSuccess |
    IFetchCategoryProductsFailure

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
}

export const FETCH_CATEGORY_PRODUCTS_REQUEST = 'FETCH_CATEGORY_PRODUCTS_REQUEST'
export const FETCH_CATEGORY_PRODUCTS_SUCCESS = 'FETCH_CATEGORY_PRODUCTS_SUCCESS'
export const FETCH_CATEGORY_PRODUCTS_FAILURE = 'FETCH_CATEGORY_PRODUCTS_FAILURE'
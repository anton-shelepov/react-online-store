import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORY_PRODUCTS_FAILURE, CatalogActionsTypes } from './../actions/catalogActions/catalogActionsTypes';
import { ICatalogState } from "../../types/catalogTypes";

const initialState: ICatalogState = {

    categories: [],

    categoryProducts: [],

    productsCount: 0, 
    pageSize: 0, 
    isLoading: false, 
    errorMessage: '',
}


const catalogReducer = (state: ICatalogState = initialState, action: CatalogActionsTypes): ICatalogState => {
    switch (action.type) {

        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.data,
                isLoading: false
            }

        case FETCH_CATEGORY_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoryProducts: action.data.categoryProducts,
                productsCount: action.data.productsCount._count._all,
                pageSize: action.data.pageSize
            }

        case FETCH_CATEGORY_PRODUCTS_FAILURE:
            debugger
            return { 
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default catalogReducer;
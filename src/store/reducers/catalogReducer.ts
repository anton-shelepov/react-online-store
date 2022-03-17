import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FetchCategoryProducts } from './../actions/catalogActions/catalogActionsTypes';
import { ICatalogState } from "../../types/catalogTypes";

const initialState: ICatalogState = {
    categories: [
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '/catalog/laptops',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '/catalog/laptops',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
    ],

    categoryProducts: [],

    productsCount: 0,

    pageSize: 0,

    isLoading: false
}


const catalogReducer = (state: ICatalogState = initialState, action: FetchCategoryProducts): ICatalogState => {
    switch (action.type) { 

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

        default:
            return state
    }
}

export default catalogReducer;
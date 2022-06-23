import { PopularProduct } from './../../types/homeTypes.d';
import { FETCH_POPULAR_PRODUCTS_REQUEST, HomeActionTypes, FETCH_POPULAR_PRODUCTS_SUCCESS } from './../actions/homeActions/homeActionsTypes';
import { IHomeState } from "../../types/homeTypes";
import PopularProducts from '../../components/PopularProducts/PopularProducts';

const initialState: IHomeState = {
    discounts: [
        {
            title: "Компьютеры SAMSUNG",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://t2.tudocdn.net/566991?w=1200&h=1200",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://cdn.mos.cms.futurecdn.net/TpvTzhvR9EsQV6XrBwvYTe-1200-80.jpg",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://des.gbtcdn.com/storage/item/6577893226171797504/15911/e9986ce755bb.jpg",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://ae01.alicdn.com/kf/H5d3dba3c8b234fe49d05a14e334d51674.jpg",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://www.techenet.com/wp-content/uploads/2021/06/Xiaomi-Mi-Notebook-Pro-X-3.jpg",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
            image: "https://images.firstpost.com/wp-content/uploads/2020/06/Mi-Notebook-14-Horizon-Edition-Hero-4.3.jpg",
        },
    ],
    popularProducts: [],
    isLoading: false,
    errorMessage: ''
}


const HomeReducer = (state: IHomeState = initialState, action: HomeActionTypes): IHomeState => {
    switch (action.type) {

        case FETCH_POPULAR_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_POPULAR_PRODUCTS_SUCCESS:
            return {
                ...state,
                popularProducts: [...action.data].map((product: any) => ({
                    title: product.title,
                    discount: product.discount,
                    id: product.id,
                    price: product.price,
                    rating: product.rating,
                    isInStock: product.isInStock,
                    _count: product._count,
                    image: product?.images[0]?.fileName,
                }))
            }

        default:
            return state
    }
}

export default HomeReducer;
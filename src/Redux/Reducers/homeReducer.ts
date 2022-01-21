import { IAddDiscountItem, IHomeState } from "../Actions/HomeActions/homeTypes";

const initialState: IHomeState = {
    discounts: [
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
        },
        {
            title: "Компьютеры ASUS",
            description: "Зимняя распродажа производителя",
            discountSize: "Скидки до 50%",
        },
    ]
}


const HomeReducer = (state: IHomeState = initialState, action: any): IHomeState => {
    switch (action.type) {

        case 'asd':
            return state

        default:
            return state
    }
}

export default HomeReducer;
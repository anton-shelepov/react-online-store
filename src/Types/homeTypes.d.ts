import ADD_DISCOUNT_ITEM from "../Redux/Actions/HomeActions/homeActionsTypes"

//Home reducer state interface
export interface IHomeState {
    discounts: Discount[], 
} 

// Home state components types
export type Discount = {
    title: string,
    description: string,
    discountSize: string,
} 

export type PopularProducts = {
    
}

//Home actions creators types
export type AddDiscountItem = {
    type: typeof ADD_DISCOUNT_ITEM,
    payload?: IDiscount
}
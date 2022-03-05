import ADD_DISCOUNT_ITEM from "../store/actions/homeActions/homeActionsTypes"

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

export type ViewedProducts = {
    
}

export type PopularProducts = {
    
}

//Home actions creators types
export type AddDiscountItem = {
    type: typeof ADD_DISCOUNT_ITEM,
    payload?: IDiscount
}
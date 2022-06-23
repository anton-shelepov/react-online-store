import ADD_DISCOUNT_ITEM from "../store/actions/homeActions/homeActionsTypes"

//Home reducer state interface
export interface IHomeState {
    discounts: Discount[], 
    popularProducts: PopularProduct[],
    isLoading?: boolean,
    errorMessage?: string,
} 

// Home state components types
export type Discount = {
    title: string,
    description: string,
    discountSize: string,
    image: string,
} 

export type ViewedProducts = {
    
}

export type PopularProduct = {
    title: string,
    price: number,
    rating: number,
    discount: number,
    image: string,
    isInStock: boolean,
    id: number,
    _count: {
        reviews: number,
    }
}

//Home actions creators types
export type AddDiscountItem = {
    type: typeof ADD_DISCOUNT_ITEM,
    payload?: IDiscount
}
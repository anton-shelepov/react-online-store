import ADD_DISCOUNT_ITEM from "./homeActions"

interface IHomeState {
    discounts: IDiscount[], 
} 

interface IDiscount {
    title: string,
    description: string,
    discountSize: string,
} 

interface IAddDiscountItem {
    type: typeof ADD_DISCOUNT_ITEM,
    payload?: IDiscount
}
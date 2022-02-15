
//Home reducer state interface
export interface ICatalogState {
    catalogItems: CatalogItems[],
}

// Home state components types
export type CatalogItems = { 
        image: string,
        itemName: string,
        link: string, 
}

// //Home actions creators types
// export type AddDiscountItem = {
//     type: typeof ADD_DISCOUNT_ITEM,
//     payload?: IDiscount
// }
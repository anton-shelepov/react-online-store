
//Catalog reducer state interface
export interface ICatalogState {
    categories: CategoriesItem[],
    products: ProductsItem[],
}

// Category state components types
export type CategoriesItem = {
    image: string,
    itemName: string,
    link: string,
}

// Products state components types
export type ProductsItem = {
    id: number;
    image: string;
    title: string;
    rating: number;
    reviews: number;
    isInStock: boolean;
    isFavorite: boolean;
    price: number;
    discount?: number;
    oldPrice?: number;

    btnValue?: string;
    btnIcon?: string;
}

// //Home actions creators types
// export type AddDiscountItem = {
//     type: typeof ADD_DISCOUNT_ITEM,
//     payload?: IDiscount
// }
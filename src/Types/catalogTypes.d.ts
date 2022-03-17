
//Catalog reducer state interface
export interface ICatalogState {
    categories: CategoriesItem[],
    categoryProducts: ProductsItem[],
    productsCount: number,
    pageSize: number,
    isLoading: boolean,
}

// Category state components types
export type CategoriesItem = {
    image: string,
    icon?: string,
    itemName: string,
    link: string,
}

// Products state components types
export type ProductsItem = {
    id: number;
    images: {fileName: string}[];
    title: string;
    rating: number;
    isInStock: boolean;
    isFavorite: boolean;
    price: number;
    discount?: number;

    _count?: {reviews: number} 

    btnIcon?: string
    btnValue?: string
}

// //Home actions creators types
// export type AddDiscountItem = {
//     type: typeof ADD_DISCOUNT_ITEM,
//     payload?: IDiscount
// }
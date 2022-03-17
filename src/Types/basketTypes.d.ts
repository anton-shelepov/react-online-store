import { ProductsItem } from "./catalogTypes";

//Catalog reducer state interface
export interface IBasketState {
    products: ProductsItem[]
}

export type BasketItem = {
    id: number;
    image: string;
    title: string;
    rating: number;
    isInStock: boolean;
    isFavorite: boolean;
    price: number;
    discount?: number | undefined;
    _count?: {
        reviews: number;
    } | undefined;

    btnIcon: string
    btnValue: string
}
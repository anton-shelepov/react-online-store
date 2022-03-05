
export interface IProductState {
    productInfo: ProductInfo,
    productSpecs: ProductSpec[],
    productReviews: ProductReview[],
}

export type ProductInfo = {
    images: string[];
    title: string;
    mainSpecs: string;
    rating: number;
    reviews: number;
    discount?: number;
    oldPrice?: number;
    price: number;
    isFavorite: boolean;
    isInStock: boolean;
    deliveryPrice: number;
}

export type ProductSpec = {
    groupTitle: string;
    groupValues: {
        specTitle: string;
        specValue: string;
    } [] 
}

export type ProductReview = {
    date: date;
    usedTerm: string;
    dignity: string;
    flaws: string;
    comment: string;
    rating: number;
}

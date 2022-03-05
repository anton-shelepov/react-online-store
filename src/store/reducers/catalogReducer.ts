import { ICatalogState } from "../../types/catalogTypes";

const initialState: ICatalogState = { 
    categories: [
        {
            image: '', 
            itemName: 'Ноутбуки',
            link: '/catalog/laptops',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        }, 
        {
            image: '', 
            itemName: 'Ноутбуки',
            link: '/catalog/laptops',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        },
        {
            image: '',
            itemName: 'Ноутбуки',
            link: '',
        }, 
    ], 

    products: [
        {
            id: 1,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
            title: '3.3" Ноутбук Apple MacBook Air серый',
            rating: 5,
            reviews: 1200,
            isInStock: true,
            isFavorite: false,
            oldPrice: 100_000,
            discount: 15,
            price: 80_000,
        },
        {
            id: 2,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
            title: '3.3" Ноутбук Apple MacBook Air серый',
            rating: 5,
            reviews: 1200,
            isInStock: true,
            isFavorite: false,
            oldPrice: 100_000,
            discount: 15,
            price: 80_000,
        },
        {
            id: 3,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
            title: '3.3" Ноутбук Apple MacBook Air серый',
            rating: 5,
            reviews: 1200,
            isInStock: true,
            isFavorite: false,
            oldPrice: 100_000,
            discount: 15,
            price: 80_000,
        },
        {
            id: 4,
            image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
            title: '3.3" Ноутбук Apple MacBook Air серый',
            rating: 5,
            reviews: 1200,
            isInStock: true,
            isFavorite: false,
            oldPrice: 100_000,
            discount: 15,
            price: 80_000,
        },
    ]
} 


const catalogReducer = (state: ICatalogState = initialState, action: any): ICatalogState => {
    switch (action.type) {

        case '':
            return state

        default:
            return state
    }
}

export default catalogReducer;
import { ICatalogState } from "../../Types/catalogTypes";

const initialState: ICatalogState = { 
    catalogItems: [
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
        }
    ], 
} 


const catalogReducer = (state: ICatalogState = initialState, action: any): ICatalogState => {
    switch (action.type) {

        case 'asd':
            return state

        default:
            return state
    }
}

export default catalogReducer;
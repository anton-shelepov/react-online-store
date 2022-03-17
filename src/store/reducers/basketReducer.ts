import { IBasketState } from './../../types/basketTypes.d';

const initialState: IBasketState = { 
    products: []
} 

const basketReducer = (state: IBasketState = initialState, action: any): IBasketState => {
    switch (action.type) { 

        default:
            return state
    }
}

export default basketReducer;
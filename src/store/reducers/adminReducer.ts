import { IAdminState } from './../../types/adminTypes.d';
import { AuthActionTypes } from './../actions/authActions/authActionsTypes';

const initialState: IAdminState = {
    categories: [],
    products: [],
}

const adminReducer = (state: IAdminState = initialState, action: AuthActionTypes): IAdminState => {
    switch (action.type) { 

        

        default:
            return state
    }
}

export default adminReducer;
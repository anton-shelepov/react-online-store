import { SET_USER_AUTH } from "./authActionsTypes"


export type AuthActionTypes = ReturnType<typeof setUserAuth> 

export const setUserAuth = () => ({type: SET_USER_AUTH})


import { instance } from ".."

export interface ICatalogApi {
    
} 

const basePath = '/users'

export const users = { 
    fetchAllUsers() {
        return instance.get(`${basePath}`)
    }, 
} 
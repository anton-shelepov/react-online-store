import { privateClient } from ".."

export interface ICatalogApi {

}

const basePath = '/users'

export const users = {
    fetchAllUsers() {
        return privateClient.get(`${basePath}`)
    },
} 
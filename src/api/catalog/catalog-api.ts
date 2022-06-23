import { privateClient } from ".."

export interface ICatalogApi {

}

const basePath = '/categories'

export const catalog = {

    fetchCategories() {
        return privateClient.get(`${basePath}`)
    },

    fetchCategoryProducts(categoryName: string, queryPage?: string) {
        return privateClient.get(`${basePath}/${categoryName}${typeof queryPage !== "undefined" ? `/${queryPage}` : ''}`)
    },

} 
import { privateClient } from "..";
import { ICreateCategoryRequestData } from './admin-api.d';

const basePath = '/categories'

export const admin = {

    createCategory({ categoryName, categoryCatalogName, image, icon }: ICreateCategoryRequestData) {
        const data = new FormData()
        data.append('files', image[0])
        data.append('files', icon[0])
        data.append('categoryName', categoryName)
        privateClient.post(`${basePath}/create`, ({ categoryName, categoryCatalogName }))
            .then(() => {
                return privateClient.post(`${basePath}/upload-images`, data, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
            })
    },

    createProduct(formData: ICreateCategoryRequestData) {
        return privateClient.post(`${basePath}/signup`, formData)
    }
} 
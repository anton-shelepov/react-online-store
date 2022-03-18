import { ICreateCategoryRequestData } from './admin-api.d';
import { instance } from ".."

const basePath = '/categories'

export const admin = {

    createCategory({ categoryName, categoryCatalogName, image, icon }: ICreateCategoryRequestData) {
        const data = new FormData()
        data.append('files', image[0])
        data.append('files', icon[0])
        data.append('categoryName', categoryName)
        instance.post(`${basePath}/create`, ({ categoryName, categoryCatalogName }))
            .then(() => {
                return instance.post(`${basePath}/upload-images`, data, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
            })
    },

    createProduct(formData: ICreateCategoryRequestData) {
        return instance.post(`${basePath}/signup`, { ...formData })
    }
} 
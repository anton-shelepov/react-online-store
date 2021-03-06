export const priceFormatter = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽'
}

export const discountCalculate = (discount: number, price: number) => {
    return price + (price * (discount / 100))
}

export const getImageSrc = (imageName: string) => {
    return `http://localhost:3001/uploads/images/${imageName}`
}

export const getImagesSrc = (images: { fileName: string }[]) => {
    return `http://localhost:3001/uploads/images/${images[0]?.fileName}`
}


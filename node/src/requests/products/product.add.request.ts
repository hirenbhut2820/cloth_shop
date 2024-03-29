import { array, boolean, object, string } from "yup";

export const productAddRequest = object({
    name: string().required(),
    description: string().required(),
    richDescription: string().required(),
    image: string().required(),
    images: array().required(),
    brand: string().required(),
    price: string().required(),
    offerPrice: string().required(),
    discountPercentage: string().required(),
    categoryIds: array().required(),
    countInStocks: string().required(),
    ratings: array().required(),
    isFeatures: boolean().required(),
    size: string().required(),
})
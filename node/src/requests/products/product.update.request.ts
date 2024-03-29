import { array, boolean, object, string } from "yup";

export const productUpdateRequest = object({
    name: string().optional(),
    description: string().optional(),
    richDescription: string().optional(),
    image: string().optional(),
    images: array().optional(),
    brand: string().optional(),
    price: string().optional(),
    offerPrice: string().optional(),
    discountPercentage: string().optional(),
    categoryIds: array().optional(),
    countInStocks: string().optional(),
    ratings: array().optional(),
    isFeatures: boolean().optional(),
    size: string().optional(),
})
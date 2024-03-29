import { array, object, string } from "yup";

export const cartsAddRequest = object({
    productIds: array().required(),
    productPrice: array().required(),
    orderTotal: string().required()
})
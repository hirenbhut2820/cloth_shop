import { array, object, string } from "yup";

export const cartsUpdateRequest = object({
    productIds: array().required(),
    productPrice: array().required(),
    orderTotal: string().required()
})
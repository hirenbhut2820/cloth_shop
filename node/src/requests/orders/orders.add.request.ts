import { array, object, string } from "yup";

export const ordersAddRequest = object({
    productIds: array().required(),
    productPrice: array().required(),
    orderTotal: string().required()
})
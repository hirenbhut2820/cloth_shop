import { array, object, string } from "yup";

export const ordersUpdateRequest = object({
    productIds: array().required(),
    productPrice: array().required(),
    orderTotal: string().required()
})
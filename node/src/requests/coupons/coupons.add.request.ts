import { object, string } from "yup";

export const couponsAddRequest = object({
    name: string().required(),
    price: string().required(),
})
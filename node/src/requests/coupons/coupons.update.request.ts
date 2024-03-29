import { boolean, object, string } from "yup";

export const couponsUpdateRequest = object({
    name: string().optional(),
    price: string().optional(),
    active: boolean().optional(),
})
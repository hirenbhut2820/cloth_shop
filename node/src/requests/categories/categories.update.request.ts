import { array, object, string } from "yup";

export const categoryUpdateRequest = object({
    name: string().optional(),
    description: string().optional(),
    productIds: array().optional()
})
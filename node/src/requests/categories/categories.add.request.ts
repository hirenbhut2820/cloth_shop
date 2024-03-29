import { object, string } from "yup";

export const categoryAddRequest = object({
    name: string().required(),
    description: string().required(),
})
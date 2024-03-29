import { object, string } from "yup";

export const brandAddRequest = object({
    name: string().required(),
    brandLogo: string().required(),
})
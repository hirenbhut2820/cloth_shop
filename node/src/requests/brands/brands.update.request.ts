import { object, string } from "yup";

export const brandUpdateRequest = object({
    name: string().optional(),
    brandLogo: string().optional(),
})
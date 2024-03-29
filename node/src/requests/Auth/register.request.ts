import { object, string } from "yup";

export const registerRequestValidator = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    password: string().required(),
})
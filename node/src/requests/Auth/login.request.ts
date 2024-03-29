import { string, object } from "yup";

export const loginRequestValidator = object({
    email: string().required(),
    password: string().required()
})
import { object, string } from "yup";

export const IdQueryParamsRequest = object({
    id: string().required()
})
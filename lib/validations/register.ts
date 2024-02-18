import * as z from "zod"

export const userRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  , { message: "Password Must be a combination of Capital letter, Small letter, Special Character and a number." }),
})
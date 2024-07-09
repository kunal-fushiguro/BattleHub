import z from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 character's long." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character's long." }),
});

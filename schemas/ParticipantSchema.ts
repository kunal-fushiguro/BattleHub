import z from "zod";

export const ParticipantSchema = z.object({
  gameuid: z
    .string()
    .min(6, { message: "uid must be atleast 6 character long." }),
  gamegrene: z.string({ message: "Select Game Gerne" }),
  description: z
    .string()
    .min(10, { message: "description must be atleast 10 character long." }),
  contacthandle: z
    .string()
    .min(3, { message: "description must be atleast 3 character long." }),
  contactlink: z
    .string()
    .min(10, { message: "description must be atleast 10 character long." }),
});

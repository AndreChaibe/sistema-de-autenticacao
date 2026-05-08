import { z } from "zod";

export const authSchema = z.object({
  username: z
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(20, "Máximo de 20 caracteres")
    .regex(/^[a-zA-Z0-9_-]+$/, "Sem espaços, acentos ou caracteres especiais")
    .regex(/^[a-zA-Z]/, "Deve começar com uma letra"),

  password: z
    .string()
    .min(8, "Mínimo de 8 caracteres")
    .regex(/[A-Z]/, "Pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "Pelo menos uma letra minúscula")
    .regex(/[0-9]/, "Pelo menos um número")
    .regex(/[^a-zA-Z0-9]/, "Pelo menos um caractere especial"),
});

export const registerSchema = authSchema.extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type AuthData = Omit<z.infer<typeof registerSchema>, "confirmPassword">;

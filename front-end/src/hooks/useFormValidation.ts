import { z } from "zod";
import { useState } from "react";

type FormErrors = Record<string, string | undefined>;
export type ZodFormSchema = z.ZodObject<z.ZodRawShape> | z.ZodPipe<z.ZodObject<z.ZodRawShape>>;

export const useFormValidation = (schema: ZodFormSchema) => {
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(values: Record<string, FormDataEntryValue>): boolean {
    const result = schema.safeParse(values);

    if (!result.success) {
      const errorsObject = result.error.flatten().fieldErrors as Record<string, string[]>;
      setErrors({
        username: errorsObject.username?.[0],
        password: errorsObject.password?.[0],
        confirmPassword: errorsObject.confirmPassword?.[0],
      });
      return false;
    }

    setErrors({});
    return true;
  }

  const hasValidationErrors = Object.values(errors).some(Boolean);

  return { errors, validate, hasValidationErrors };
};
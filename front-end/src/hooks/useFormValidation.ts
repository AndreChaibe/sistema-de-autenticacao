import { useState } from "react";
import { authSchema, type AuthData } from "../api/authSchema";

type FormErrors = Partial<Record<keyof AuthData, string>>;
type FormInput = Partial<AuthData>;

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(values: FormInput): values is AuthData {
    const result = authSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
      });
      return false;
    }

    setErrors({});
    return true;
  }

  const hasValidationErrors = Object.values(errors).some(Boolean);

  return { errors, validate, hasValidationErrors };
};
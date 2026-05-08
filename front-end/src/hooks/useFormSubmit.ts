import { authSchema, type AuthData } from "../api/authSchema";
import { useFormValidation, type ZodFormSchema } from "./useFormValidation";
import type { AuthFn } from "./useAuth";

type FormSubmitEvent = Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0];

export function useFormSubmit(submitFn: AuthFn, schema: ZodFormSchema = authSchema) {
  const { errors, validate, hasValidationErrors } = useFormValidation(schema);

  async function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validate(formData)) return;

    const { confirmPassword, ...authData } = formData as Record<string, string>;
    await submitFn(authData as AuthData);
  }

  return { handleSubmit, errors, hasValidationErrors };
}
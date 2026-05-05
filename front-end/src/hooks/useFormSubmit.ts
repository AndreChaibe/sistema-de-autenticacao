import type { AuthData } from "../api/auth";
import { useFormValidation } from "./useFormValidation";
import type { AuthFn } from "./useAuth";

type FormSubmitEvent = Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0];

export function useFormSubmit(submitFn: AuthFn) {
  const { errors, validate, hasValidationErrors } = useFormValidation();

  async function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!validate(formData)) return;
    await submitFn(formData as AuthData);
  }

  return { handleSubmit, errors, hasValidationErrors };
}
import { useMutation } from "@tanstack/react-query";
import { login, register } from "../api/auth";
import type { AxiosError, AxiosResponse } from "axios";
import type { AuthData } from "../api/authSchema";

export type AuthFn = (data: AuthData) => Promise<AxiosResponse>;
type AuthError = AxiosError<{ error: string }>;
type AuthMutationVars = { authAction: AuthFn; data: AuthData };

export const useAuth = () => {
  const { mutateAsync, isPending, data, error } = useMutation<AxiosResponse, AuthError, AuthMutationVars>({
    mutationFn: ({ authAction, data }) => authAction(data),
  });

  const handleAuth = (authAction: AuthFn) => (data: AuthData) => mutateAsync({ authAction, data });

  return {
    handleLogin: handleAuth(login),
    handleRegister: handleAuth(register),
    loading: isPending,
    error: error?.response?.data?.error ?? error?.message ?? null,
    message: data?.data?.message ?? data?.statusText ?? null,
  };
};
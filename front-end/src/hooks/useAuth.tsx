import { useMutation } from "@tanstack/react-query";
import { login, register, type AuthData } from "../api/auth";
import type { AxiosError, AxiosResponse } from "axios";

type AuthError = AxiosError<{ error: string }>;
type AuthFn = (data: AuthData) => Promise<AxiosResponse>;
type AuthMutationVars = { authAction: AuthFn; data: AuthData };

export const useAuth = () => {
  const { mutateAsync, isPending, error } = useMutation<AxiosResponse, AuthError, AuthMutationVars>({
    mutationFn: ({ authAction, data }) => authAction(data),
  });

  const handleAuth = (authAction: AuthFn): AuthFn =>
    (data) => mutateAsync({ authAction, data });

  return {
    handleLogin: handleAuth(login),
    handleRegister: handleAuth(register),
    loading: isPending,
    error: error?.response?.data?.error ?? error?.message ?? null,
  };
};
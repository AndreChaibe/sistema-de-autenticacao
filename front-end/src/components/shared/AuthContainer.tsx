import type { ReactNode } from "react";

interface AuthContainerProps {
  children: ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className="bg-[rgba(227,224,217,0.25)] flex flex-col px-10 py-11 rounded-4xl shadow-[0_15px_15px_rgba(0,0,0,0.20)]">
      {children}
    </div>
  )
}
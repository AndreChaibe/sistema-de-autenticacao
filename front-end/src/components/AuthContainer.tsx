import type { ReactNode } from "react";

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className="bg-[rgba(217,217,217,0.25)] flex flex-col px-10 py-11 rounded-4xl">
      {children}
    </div>
  )
}

export default AuthContainer;

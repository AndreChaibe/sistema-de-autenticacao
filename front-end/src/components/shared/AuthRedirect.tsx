import { Link } from "react-router-dom";

interface AuthRedirectProps {
  to: string;
  label: string;
  linkText: string;
}

export const AuthRedirect = ({ to, label, linkText }: AuthRedirectProps) => {
  return (
    <Link to={to} className="inline-block text-[17px] mx-auto mt-7 hover:text-[#2c2927] duration-300">
      {label} <span className="font-bold">{linkText}</span>
    </Link>
  );
};

export default AuthRedirect;
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
    children: (typeInput: "text" | "password") => React.ReactNode;
}

const PasswordInput = ({ children }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            {children(showPassword ? "text" : "password")}
            <button className="absolute cursor-pointer right-3 my-4.5" type="button" onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <EyeOff /> : <Eye />}
            </button>
        </div>
    );
};

export default PasswordInput;
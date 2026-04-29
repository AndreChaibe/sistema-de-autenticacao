import { Link } from "react-router-dom";
import { useAuth, useFormValidation } from "../hooks";

const FormLogin = () => {
    const { handleLogin, loading, error } = useAuth();
    const { errors, validate, hasValidationErrors } = useFormValidation();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        if (!validate(formData)) return;
        await handleLogin(formData);
    }

    return (
        <form
            className="flex flex-col [&>input]:bg-[#f5f1f1] [&>label]:text-[23px] [&>input]:rounded-md [&>input]:p-3 [&>input]:text-2xl [&>input]:font-normal [&>input]:w-full gap-1.5 w-120 [&>input]:outline-none [&>p]:text-[#d52525] [&>p]:text-[18px]"
            onSubmit={handleSubmit}
        >
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" id="username" name="username" />
            {errors.username && <p className="mb-1">{errors.username}</p>}

            <label className="mt-1" htmlFor="password">Senha</label>
            <input className="mb-1" type="password" id="password" name="password"  />
            {errors.password && <p className="text-[15px]">{errors.password}</p>}

            {error && !hasValidationErrors && (
                <p className="font-medium text-center mt-8">
                    {error}
                </p>
            )}

            <button
                className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-[20px] tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300 mt-9"
                type="submit"
            >
                {loading ? "Buscando..." : "LOGIN"}
            </button>

            <Link to={"/register"} className="inline-block text-[17px] mx-auto mt-7 hover:text-[#2c2927] duration-300">
                Não tem uma conta? <span className="font-bold">Cadastre-se</span>
            </Link>
        </form>
    );
};

export default FormLogin;
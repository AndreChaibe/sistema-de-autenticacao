import { Link } from "react-router-dom";
import { useAuth, useFormSubmit } from "../../hooks";
import PasswordInput from "../shared/PasswordInput";

const FormLogin = () => {
    const { handleLogin, loading, error } = useAuth();
    const { handleSubmit, errors, hasValidationErrors } = useFormSubmit(handleLogin);
    return (
        <form
            className="flex flex-col [&>input,&>div>input]:bg-[#f5f1f1] [&>label]:text-[23px] [&>input,&>div>input]:rounded-md [&>input,&>div>input]:p-3 [&>input,&>div>input]:text-2xl [&>input,&>div>input]:font-normal [&>input,&>div>input]:w-full gap-1.5 w-120 [&>input,&>div>input]:outline-none [&>p]:text-[#d52525] [&>p]:text-[18px] "
            onSubmit={handleSubmit}
        >
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" id="username" name="username" />

            {errors.username && <p className="mb-1">{errors.username}</p>}

            <label className="mt-1" htmlFor="password">Senha</label>

            <PasswordInput>
                {(typeInput) => (
                    <input className="mb-1" type={typeInput} id="password" name="password" />
                )}
            </PasswordInput>

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
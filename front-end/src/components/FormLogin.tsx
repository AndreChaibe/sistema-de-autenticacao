import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth, useFormValidation  } from "../hooks";

const FormLogin = () => {

    const [value, setValue] = useState({ username: '', password: '' });
    const { handleLogin, loading, error } = useAuth();
    const { validate, errorMessage } = useFormValidation();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validate(value)) return;
        await handleLogin(value);
    }

    return (
        <form className="flex flex-col [&>input]:bg-[#f5f1f1] [&>label]:text-[23px] [&>input]:rounded-md [&>input]:p-3 [&>input]:text-2xl [&>input]:font-normal [&>input]:w-full gap-1.5 w-120 [&>input]:outline-none" onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de usuário</label>
            <input onChange={handleChange} className="mb-3" type="text" id="username" name="username" value={value.username} />

            <label htmlFor="password">Senha</label>
            <input onChange={handleChange} className="mb-9" type="password" id="password" name="password" value={value.password} />

            {(errorMessage || error) && (
                <p className="text-[#d52525] font-medium text-center text-[18px] mb-3">
                    {errorMessage || error}
                </p>
            )}

            <button className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-[20px] tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300" type="submit">{loading ? 'Buscando...' : 'LOGIN'}</button>

            <Link to={"/register"} className="inline-block text-[17px] mx-auto mt-7 hover:text-[#2c2927] duration-300">
                Não tem uma conta? <span className="font-bold">Cadastre-se</span>
            </Link>
        </form>
    )
}

export default FormLogin;
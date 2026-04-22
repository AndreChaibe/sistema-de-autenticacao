import { Link } from "react-router-dom";
import { useState } from "react";

const FormLogin = () => {

    const [value, setValue] = useState({ name: '', password: '' });
    // const [canLogin, setCanLogin] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    return (
        <form className="flex flex-col [&>input]:bg-[#f5f1f1] [&>label]:text-[23px] [&>input]:rounded-md [&>input]:p-3 [&>input]:text-2xl [&>input]:w-full gap-1.5 w-120 [&>input]:outline-none" action="">
            <label htmlFor="name">Nome de usuário</label>
            <input onChange={handleChange} className="mb-3" type="text" id="name" name="name" value={value.name} />

            <label className="" htmlFor="password">Senha</label>
            <input onChange={handleChange} className="mb-9" type="password" id="password" name="password" value={value.password} />

            <button className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-md tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300" type="submit">LOGIN</button>

            <Link to={"/register"} className="inline-block text-[17px] mx-auto mt-7 underline hover:text-[#2c2927] duration-300">
                Não tem conta? cadastre agora
            </Link>
        </form>
    )
}

export default FormLogin;
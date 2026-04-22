import { Link } from "react-router-dom";

const FormRegister = () => {
    return (
        <>
            <Link to={"/login"} className="inline-block my-3 -translate-y-7.5 underline hover:text-[#2c2927] duration-300">
                Voltar
            </Link>

            <form className="flex flex-col [&>input]:bg-[#f5f1f1] [&>label]:text-[23px] [&>input]:rounded-md [&>input]:p-3 [&>input]:text-2xl [&>input]:w-full gap-2 w-120 [&>input]:outline-none" action="">
                <label htmlFor="name">Nome de usuário</label>
                <input className="mb-7" type="text" id="name" name="name" />

                <label className="" htmlFor="password">Senha</label>
                <input className="mb-10" type="password" id="password" name="password" />

                <button className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-md tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300" type="submit">CADASTRO</button>
            </form>
        </>
    )
}

export default FormRegister;
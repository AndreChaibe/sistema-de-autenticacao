import { Link } from "react-router-dom";
import { useAuth, useFormSubmit } from "../../hooks";
import PasswordInput from "../shared/PasswordInput";

const FormRegister = () => {
    const { handleRegister, loading, error } = useAuth();
    const { handleSubmit, errors, hasValidationErrors } = useFormSubmit(handleRegister);

    return (
        <>
            <Link to={"/login"} className="inline-block my-3 -translate-y-7.5 hover:text-[#2c2927] duration-300">
                Voltar
            </Link>

            <form className="flex flex-col [&>input,&>div>input]:bg-[#f5f1f1] [&>input,&>div>input]:font-normal [&>label]:text-[23px] [&>input,&>div>input]:rounded-md [&>input,&>div>input]:p-3 [&>input,&>div>input]:text-2xl [&>input,&>div>input]:w-full gap-2 w-120 [&>input,&>div>input]:outline-none" onSubmit={handleSubmit}>

                <label htmlFor="username">Nome de usuário</label>
                <input className="mb-5" type="text" id="username" name="username" />
                {errors.username && <p className="mb-1">{errors.username}</p>}

                <label className="" htmlFor="password">Senha</label>
                <PasswordInput>
                    {(type) => (
                        <input className="mb-10" type={type} id="password" name="password" />
                    )}
                </PasswordInput>

                {errors.password && <p className="text-[15px]">{errors.password}</p>}

                {error && !hasValidationErrors && (
                    <p className="font-medium text-center mt-8">
                        {error}
                    </p>
                )}

                <button className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-[20px] tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300" type="submit">{loading ? "Cadastrando..." : "CADASTRAR"}</button>
            </form>
        </>
    )
}

export default FormRegister;
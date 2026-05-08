import { useAuth, useFormSubmit } from "../../hooks";
import { registerSchema } from "../../api/authSchema"; 
import { PasswordInput, FormFeedback, SubmitButton, AuthRedirect } from "../shared";

const FormRegister = () => {
    const { handleRegister, loading, message, error } = useAuth();
    const { handleSubmit, errors, hasValidationErrors } = useFormSubmit(handleRegister, registerSchema);

    return (

        <form className="flex flex-col [&>input,&>div>input]:bg-[#f5f1f1] [&>label]:text-[20px] [&>input,&>div>input]:rounded-md [&>input,&>div>input]:p-3 [&>input,&>div>input]:text-[18px] [&>input,&>div>input]:font-normal [&>input,&>div>input]:w-full gap-1 w-120 [&>input,&>div>input]:outline-none" onSubmit={handleSubmit}>

            <label htmlFor="username">Nome para seu usuário</label>
            <input type="text" id="username" name="username" />

           {errors.username && <p className="text-[#d52525] mb-1">{errors.username}</p>}

            <label className="mt-2" htmlFor="password">Senha</label>
            <PasswordInput>
                {(typeInput) => (
                    <input type={typeInput} id="password" name="password" />
                )}
            </PasswordInput>

            {errors.password && <p className="text-[#d52525]">{errors.password}</p>}

            <label className="mt-2" htmlFor="confirmPassword">Confirmar Senha</label>
            <PasswordInput>
                {(typeInput) => (
                    <input type={typeInput} id="confirmPassword" name="confirmPassword" />
                )}
            </PasswordInput>
            {errors.confirmPassword && <p className="text-[#d52525]">{errors.confirmPassword}</p>}

            <FormFeedback message={message} error={error} hasValidationErrors={hasValidationErrors} />

            <SubmitButton loading={loading} label="CADASTRAR" loadingLabel="Cadastrando..." />

            <AuthRedirect to="/login" label="Já tem uma conta?" linkText="Faça login" />
        </form>
    )
}

export default FormRegister;
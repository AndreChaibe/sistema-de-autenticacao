import { useAuth, useFormSubmit } from "../../hooks";
import { PasswordInput, FormFeedback, SubmitButton, AuthRedirect } from "../shared/";

const FormLogin = () => {
    const { handleLogin, loading, message, error } = useAuth();
    const { handleSubmit, errors, hasValidationErrors } = useFormSubmit(handleLogin);
    return (
        <form
            className="flex flex-col [&>input,&>div>input]:bg-[#f5f1f1] [&>label]:text-[20px] [&>input,&>div>input]:rounded-md [&>input,&>div>input]:p-3 [&>input,&>div>input]:text-[18px] [&>input,&>div>input]:font-normal [&>input,&>div>input]:w-full gap-1 w-120 [&>input,&>div>input]:outline-none" onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" id="username" name="username" />

            {errors.username && <p className="text-[#d52525] mb-1">{errors.username}</p>}

            <label className="mt-2" htmlFor="password">Senha</label>
            <PasswordInput>
                {(typeInput) => (
                    <input type={typeInput} id="password" name="password" />
                )}
            </PasswordInput>

            {errors.password && <p className="text-[#d52525]">{errors.password}</p>}

            <FormFeedback message={message} error={error} hasValidationErrors={hasValidationErrors} />

            <SubmitButton loading={loading} label="LOGIN" loadingLabel="Buscando..." />

            <AuthRedirect to="/register" label="Não tem uma conta?" linkText="Cadastre-se" />
        </form>
    );
};

export default FormLogin;
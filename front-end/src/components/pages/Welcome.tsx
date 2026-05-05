import { UserCheck } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 [&>p]:text-[24px] [&>p]:text-center p-5 [&>p,&>h2]:text-[#141212]">
      
      <UserCheck className='w-32 h-25 text-[#141212] bg-[#7de55e] rounded-[35px] mb-5' />

      <h2 className="font-extrabold text-[38px] text-center mt-3">LOGIN EFETUADO COM SUCESSO!</h2>
      <p>Seus dados foram encontrados no banco de dados</p>
      <p className="font-semibold">Bem-vindo de volta, André</p>

    </div>
  )
}

export default Welcome;
const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 [&>p]:text-[24px] [&>p]:text-center p-5">
      <svg
        className="w-25 mb-5"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="256" fill="#00ba00" />
        <path
          d="M150 260l70 70 140-140"
          fill="none"
          stroke="#ffffff"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 className="font-extrabold text-[44px] text-center mt-3">LOGIN EFETUADO COM SUCESSO!</h2>
      <p>Seus dados foram encontrados no banco de dados</p>
      <p className="font-semibold">Bem-vindo de volta, André</p>

    </div>
  )
}

export default Welcome;
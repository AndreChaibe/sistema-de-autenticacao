import AuthContainer from "./components/AuthContainer";
import Router from "../Route";
import './index.css'

function App() {
  return (

    <div className="flex flex-col h-screen items-center justify-center bg-[#E5C68D] tracking-[0.7px]">

      <AuthContainer>
        <Router />
      </AuthContainer>

    </div>
  )
}

export default App;

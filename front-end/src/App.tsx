import AuthContainer from "./components/AuthContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "../Route";
import './index.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen items-center justify-center bg-[#E5C68D] tracking-[0.7px]">
        <AuthContainer>
          <Router />
        </AuthContainer>
      </div>
    </QueryClientProvider>
  )
}

export default App;

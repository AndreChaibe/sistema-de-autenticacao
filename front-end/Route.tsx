import { Route, Routes, Navigate } from "react-router-dom";
import FormLogin from "./src/components/FormLogin";
import FormRegister from "./src/components/FormRegister";
import Welcome from "./src/components/Welcome";

function Router() {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/register" element={<FormRegister />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default Router
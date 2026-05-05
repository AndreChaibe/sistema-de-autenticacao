import { Route, Routes, Navigate } from "react-router-dom";
import FormLogin from "../components/pages/FormLogin";
import FormRegister from "../components/pages/FormRegister";
import Welcome from "../components/pages/Welcome";

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
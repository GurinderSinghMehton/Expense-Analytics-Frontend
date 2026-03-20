import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../../layouts/Auth";
import Login from "../../layouts/Auth/SubComponents/Login";
import SignUp from "../../layouts/Auth/SubComponents/SignUp";
import Dashboard from "../../layouts/Dashboard";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

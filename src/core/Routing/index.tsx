import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../../layouts/Auth";
import Login from "../../layouts/Auth/SubComponents/Login";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element="HELLOW ELECTRON" />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

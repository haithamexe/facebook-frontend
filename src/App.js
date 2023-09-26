import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound404 from "./pages/NotFound404";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} exact>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedTemplate from "../components/templates/protected";
import Dashboard from "../pages/protected/Dashboard";
import User from "../pages/protected/User";
import DaftarPemain from "../pages/protected/DaftarPemain";
import Pembayaran from "../pages/protected/Pembayaran";
import Setting from "../pages/protected/Setting";

const ProtectedRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedTemplate />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="daftar-pemain" element={<DaftarPemain />} />
          <Route path="pembayaran" element={<Pembayaran />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default ProtectedRoute;

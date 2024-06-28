import React, { useState } from "react";
import styles from "../../styles/login.module.css";
// import loginBanner from "../../assets/images/loginBanner.png";
import Overlay from "../../components/overlayAndLoader/Overlay";
import { Outlet, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Error404 from "../errors/Error404";
import { loginBanner } from "../../assets";

function AuthLayout() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Overlay />}

      <div className={`${styles.login} p-3`}>
        <div className="row d-flex align-items-center">
          <Outlet context={[loading, setLoading]} />
          <div
            className={`${styles.login_right_section} col-lg-6 col-md-6 col-xs-12 border-radius-3`}
          >
            <img src={loginBanner} alt="" className={`${styles.banner_img}`} />
          </div>
        </div>
      </div>
    </>
  );
}

//Auth Routes
const AuthRoute = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AuthRoute;

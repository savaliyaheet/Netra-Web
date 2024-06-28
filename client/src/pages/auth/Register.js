import React from "react";
import styles from "../../styles/login.module.css";
import Logo from "../../assets/images/logo.svg";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form-elements/FormikControl";
import Twitter from "../../assets/images/twitter.svg";
import Google from "../../assets/images/google.svg";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import * as Yup from "yup";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

function Register() {
  const [loading, setLoading] = useOutletContext();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("Submitted Values", values);
    setLoading(true);
  };
  return (
    <div className="col-lg-6 col-md-6 col-xs-12 px-lg-5 px-sm-3 py-md-2">
      <div className="login__header d-flex align-items-center justify-content-between mb-4">
        <div className="login__header-logo-section align-content-between d-flex align-items-center flex-sm-row">
          <img src={Logo} alt="" />
          <span className={`${styles.logoTitle} ms-2`}>Tweet Netra</span>
        </div>
        <div className={`${styles.login__header_right} m-0 d-flex p-0`}>
          <p className="m-0">Already have an account?</p>
          <Link to="/auth/login" className="ms-1 fw-semibold">
            Login Now
          </Link>
        </div>
      </div>
      <div className={`${styles.login__main} py-lg-5`}>
        <h1 className="m-0">Get started for free</h1>
        <p className="mb-4">
          It’s very quick and easy to create your account with us
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <FormikControl
              control="Input"
              name="email"
              id="email"
              placeholder="Enter your email address"
              type="email"
              label="Email"
            />
            <FormikControl
              control="Input"
              name="password"
              id="password"
              placeholder="Enter your password"
              type="password"
              label="Password"
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <FormikControl
                control="Checkbox"
                name="remember"
                id="remember"
                label="Remeber me"
              />

              <a href="#">Forgot password?</a>
            </div>
            <PrimaryButton type="submit">Sign up</PrimaryButton>
          </Form>
        </Formik>
        <div className="d-flex align-items-center my-4">
          <span className={styles.seperator}></span>
          <span className="mx-2" style={{ color: "#676767" }}>
            OR
          </span>
          <span className={styles.seperator}></span>
        </div>

        <SecondaryButton>
          <img src={Twitter} alt="" className={`me-2 ${styles.login_icon}`} />{" "}
          Sign up with Twitter
        </SecondaryButton>
        <SecondaryButton>
          <img src={Google} alt="" className={`me-2 ${styles.login_icon}`} />{" "}
          Sign up with Google
        </SecondaryButton>
      </div>
    </div>
  );
}

export default Register;

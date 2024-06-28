import React from "react";
import styles from "../../styles/login.module.css";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form-elements/FormikControl";
import { Google, Twitter, Logo } from "../../assets";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import * as Yup from "yup";
import { useNavigate, Link, useOutletContext } from "react-router-dom";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  // password: Yup.string()
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Password should contain an Uppercase, a Lowercase and special characters only!"
  //   )
  //   .min(8, "Password must contain 8 characters")
  //   .required("Required"),
});

function Login() {
  const [loading, setLoading] = useOutletContext();

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log("Submitted Values", values);
    setLoading(true);
    axios
      .post("https://reqres.in/api/login", values)
      .then((res) => {
        localStorage.setItem("user-token", res.data.token);
        setLoading(false);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-lg-6 col-md-6 col-xs-12 px-lg-5 px-sm-3 py-md-2">
      <div className="login__header d-flex align-items-center justify-content-between mb-4">
        <div className="logo_section align-content-between d-flex align-items-center flex-sm-row">
          <img src={Logo} alt="" />
          <span className="logo-heading ms-2">Tweet Netra</span>
        </div>
        <div
          className={`${styles.login__header_right} m-0 d-flex p-0 align-items-start`}
        >
          <p className="m-0 ">Don’t have an account?</p>
          <Link to="/auth/register" className="ms-1 fw-semibold">
            Create an account
          </Link>
        </div>
      </div>
      <div className={`${styles.login__main} py-xl-5 py-sm-3`}>
        <h1 className="m-0">Welcome Back</h1>
        <p className="mb-4">Welcome back! Please enter your details below</p>
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
            <PrimaryButton type="submit">Sign In</PrimaryButton>
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
          Sign in with Twitter
        </SecondaryButton>
        <button className="btn btn-secondary rounded-5 w-100 border-radius-50">
          <img src={Google} alt="" className={`me-2 ${styles.login_icon}`} />{" "}
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;

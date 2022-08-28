import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

//Toast
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Styles
import styles from "./Login.module.css";

const SignUp = () => {
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    userName: Yup.string(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      if (formik.errors) {
        notify("You login successfully", "success");
      } else {
        notify("Invalid data!", "error");
      }
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formContainer}>
          <h3>Login Form</h3>

          <div className={styles.inputContainer}>
            <label htmlFor="user">user name</label>
            <input
              className={
                formik.touched.userName && formik.errors.userName
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="text"
              id="userName"
              {...formik.getFieldProps("userName")}
            />
            <i class="fa fa-user fa-fw" aria-hidden="true"></i>
            {formik.touched.userName && formik.errors.userName ? (
              <span className={styles.error}>{formik.errors.userName}</span>
            ) : null}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email">email</label>
            <input
              className={
                formik.touched.email && formik.errors.email
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
            />
            <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
            {formik.touched.email && formik.errors.email ? (
              <span className={styles.error}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">password</label>
            <input
              className={
                formik.touched.password && formik.errors.password
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            <i class="fa fa-lock  fa-fw" aria-hidden="true"></i>
            {formik.touched.password && formik.errors.password ? (
              <span className={styles.error}>{formik.errors.password}</span>
            ) : null}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? styles.errorLoginInput
                  : styles.mainLoginInput
              }
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
            />
            <i class="fa fa-lock fa-fw" aria-hidden="true"></i>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <span className={styles.error}>
                {formik.errors.confirmPassword}
              </span>
            ) : null}
          </div>

          <div className={styles.submitButton}>
            <button type="submit">Sign Up</button>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

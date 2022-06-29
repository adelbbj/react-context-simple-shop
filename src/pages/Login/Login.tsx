import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import Container from "../../components/layouts/Container";
import { request } from "../../utils/request";
import { AuthContext } from "../../context/AuthContext";

import "./Login.css";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const authContext = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    const formData = {
      ...values,
    };

    request
      .post("/auth/login", formData)
      .then((res) => {
        const { token } = res.data;
        authContext.login(token);

        navigate("/");
      })
      .catch((e) => {
        throw e.message;
      });
  };

  return (
    <Container>
      <div className="login-form">
        <h1>Login</h1>
        <Formik
          initialValues={{
            username: "johnd2",
            password: "m38rmF$",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <Field name="username" />
                {touched.username && errors.username && (
                  <div className="error">{errors.username}</div>
                )}
              </div>

              <div>
                <Field name="password" type="password" />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div>
                <button type="submit" className="btn btn-md btn-primary">
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Login;

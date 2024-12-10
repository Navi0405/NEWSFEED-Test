import React from 'react';
import "../Registration.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Registration() {

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("もっと Real な私を見せて"),
    password: Yup.string().min(4).max(20).required("HUY"),
  });

  const onSubmit = (data, { resetForm }) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      alert("Account Registered Successfully!");
      resetForm(); // Clear the form fields
    }).catch((error) => {
      console.error("Error registering the account:", error);
      alert("Registration failed. Please try again.");
    });
  };

  return (
    <div className="registration">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputUsername"
            name="username"
            placeholder="(Ex. John123...)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputPassword"
            name="password"
            placeholder="Hehe..."
            type="password"
          />
          <button type="submit"> Register </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;

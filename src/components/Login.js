import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function notify() {
    let pass = localStorage.getItem(values.email);
    if (pass !== values.password) {
      toast.error("User does not exist please register first ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("User has been login successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const inputval = [
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      type: "Email",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
    },
  ];
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        {inputval.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onchange={onchange}
            />
          );
        })}
        <Link to="/"> Forget Password</Link>
        <button className="submit1" onClick={notify}>
          submit
        </button>
        <Link to="/">
          <button className="login">Register</button>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;

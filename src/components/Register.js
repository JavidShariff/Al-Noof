import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    conformpassword: "",
  });

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const inputval = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      errormessage:
        "The Username should be atleast 3-18 character and should not include special character",
      type: "text",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3-16}$",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      errormessage: "The Email should be valid and unique",
      type: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      placeholder: "Password",
      errormessage:
        "The Password should be atleast 8-12 character and should include 1 special character,1 letter,1 number",
      type: "password",
      label: "Password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 4,
      name: "confirmpassword",
      placeholder: "Confirm Password",
      errormessage: "The Password is not matching",
      type: "password",
      label: "Conform Password",
      pattern: values.password,
      required: true,
    },
  ];
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  function notify() {
    toast.success("The User has been successfully registered ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.setItem(
      JSON.stringify(values.email).replace(/"/g, ""),
      JSON.stringify(values.password).replace(/"/g, "")
    );
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Register</h1>
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
        <button className="submit" onClick={notify}>
          {" "}
          submit{" "}
        </button>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;

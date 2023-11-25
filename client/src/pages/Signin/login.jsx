import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <>
      <section>
        <div className="form_data">
          <div className="from_heading">
            <h1> Login </h1>{" "}
          </div>{" "}
          <form>
            <div className="form_input">
              <label htmlFor="rollno"> Roll No. </label>{" "}
              <input
                type="text"
                name="rollno"
                id="rollno"
                placeholder="Enter your email id"
              />{" "}
              <label htmlFor="password"> Password </label>{" "}
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />{" "}
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {" "}
                  {!passShow ? "Show" : "Hide"}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <button className="btn" type="submit">
              {" "}
              Login{" "}
            </button>{" "}
            <p>
              {" "}
              Don 't have an account? <NavLink to="/register">
                Sign Up{" "}
              </NavLink>{" "}
            </p>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default Login;

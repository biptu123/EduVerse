import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    rollno: '',
    password: '',
    confirm_password: ''
  });

  const [passShow, setPassShow] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch("http://localhost:9000/api/createuser",
      {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })
    console.log(response);
    const json = await response.json();
    console.log(json);
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="from_heading">
            <h1> Sign Up </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_input">
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your fullname"
                onChange={handleChange}
                value={user.name}
              />
              <label htmlFor="RollNo"> Roll No. </label>
              <input
                type="text"
                name="rollno"
                id="rollno"
                placeholder="Enter your Roll No"
                onChange={handleChange}
                value={user.rollno}
              />
              <label htmlFor="password"> Password </label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={user.password}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              <label htmlFor="confirm_password"> Confirm Password </label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Repeat your password"
                  onChange={handleChange}
                  value={user.confirm_password}
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              <button className="btn" type="submit">
                
                Sign Up
              </button>
              <p>
                Already have an account ?
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

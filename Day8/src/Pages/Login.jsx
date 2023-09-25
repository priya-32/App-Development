import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../Assets/Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { login } from "./Redux/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        role: role,
      })
    );

    if (role === "student") {
      navigate("/student");
    } else if (role === "admin") {
      navigate("/addstudent");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Login Here 📝</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <label htmlFor="role"></label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="submit_btn">
            Submit
          </button>
          {/* Add the motivational quote below the submit button */}
          <p className="motivational-quote">
            "Someday all of this hard work will be worth it"
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

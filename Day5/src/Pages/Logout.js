import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "./userSlice";
import { FaSignOutAlt } from "react-icons/fa";
import "../Assets/Styles/Logout.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`link ${isOpen ? "open" : ""}`}>
      <div className="icon" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default Logout;

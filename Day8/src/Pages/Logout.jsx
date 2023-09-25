import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "./Redux/userSlice";
import { FaSignOutAlt } from "react-icons/fa";
import "../Assets/Styles/Logout.css"; // Make sure to import the appropriate styles

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
    <div className={`link ${isOpen ? "open" : ""}`} style={{ width: "200px" }}>
      <div className="icons" onClick={handleLogout}>
        
        <FaSignOutAlt />Logout
      </div>
    </div>
  );
};

export default Logout;

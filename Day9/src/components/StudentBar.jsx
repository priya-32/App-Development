import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaSignOutAlt // Import the SignOutAlt icon
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { selectUser } from '../Pages/Redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { logout } from '../Pages/Redux/userSlice';
// Define the Logout component directly within AdminBar
const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout()); // Assuming you have a logout action
        navigate("/login");
    };

    return (
        <NavLink to="/logout" key="logout" className={`link ${isOpen ? "open" : ""}`} style={{ width: "200px" }}>
            <div className="icons" onClick={handleLogout}>
                <FaSignOutAlt />Logout
            </div>
        </NavLink>
    );
};

const StudentBar = ({ children }) => {
    const user = useSelector(selectUser);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/student",
            name: "Student",
            icon: <FaUserAlt />
        },
        {
            path: "/result",
            name: "Result",
            icon: <FaRegChartBar />
        },
        {
            path: "/subject",
            name: "Subject",
            icon: <FaCommentAlt />
        },
        // {
        //     path:"/product",
        //     name:"Attandence",
        //     icon:<FaShoppingBag/>
        // },
        {
            path: "/company",
            name: "Company",
            icon: <FaThList />
        },
        // Include Logout as a menu item
        {
            path: "/login",
            name: "Logout",
            icon: <FaSignOutAlt />
        }
    ];

    return (
        <div className="container1">
           <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
               <div className="top_section">
                   <div style={{ display: isOpen ? 'block' : 'none' }}>
                       <h1 className="user_name">{user.name}</h1>
                   </div>
                   <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars1">
                       <FaBars onClick={toggle} />
                   </div>
               </div>
               {
                   menuItem.map((item, index) => (
                       <NavLink to={item.path} key={index} className="link1" activeclassname="active1">
                           <div className="icon">{item.icon}</div>
                           <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
                }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default StudentBar;

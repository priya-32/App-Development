import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { selectUser } from '../Pages/userSlice';
import { useSelector } from 'react-redux'
import Logout from '../Pages/Logout';


const AdminBar = ({children}) => {
    const user=useSelector(selectUser)
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/student",
            name:"Student",
            icon:<FaUserAlt/>
        },
        {
            path:"/result",
            name:"Result",
            icon:<FaRegChartBar/>
        },
        {
            path:"/subject",
            name:"Subject",
            icon:<FaCommentAlt/>
        },
        // {
        //     path:"/product",
        //     name:"Attandence",
        //     icon:<FaShoppingBag/>
        // },
        {
            path:"/company",
            name:"Company",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
               <div style={{ display: isOpen ? 'block' : 'none' }}>
               <h1 className="user_name">{user.name}</h1></div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           <Logout/>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default AdminBar;
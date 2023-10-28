import React from 'react';
import { FaSearch, FaLanguage, FaRegMoon, FaRegWindowMaximize, FaRegBell, FaRegComments, FaList } from 'react-icons/fa';
// import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import './Navbar.css';
const Navbar = () => {
  const email = localStorage.getItem('AdminEmail');

//   const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div> */}
        <div className="items">
          {/* <div className="item">
            <FaLanguage className="icon" />
            English
          </div> */}
          {/* <div className="item">
            <FaRegMoon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
          {/* <div className="item">
            <FaRegWindowMaximize className="icon" />
          </div> */}
          <div className="item">
            <FaRegBell className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FaRegComments className="icon" />
            <div className="counter">2</div>
          </div>
          {/* <div className="item">
            <FaList className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
             {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

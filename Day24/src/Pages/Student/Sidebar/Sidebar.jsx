import { FiLogOut } from 'react-icons/fi'; // Import the icons you need
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {BsFillPersonLinesFill,BsFillPersonPlusFill} from 'react-icons/bs';
import {SlSocialSkype} from 'react-icons/sl';
import {BiMessageAdd} from 'react-icons/bi';
import {MdOutlineSubject} from 'react-icons/md';
import {PiTrademarkRegisteredLight} from 'react-icons/pi';
import {VscFeedback} from 'react-icons/vsc';
import {RiFeedbackFill} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import './Sidebar.css';
function Sidebar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const logoutHandler = () => {
    localStorage.clear();
    navigate('/login');
}
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
       <h3>Student</h3>
      </div>
      <ul className="sidebar-menu">
      <li>
          <Link to = "/user/student/view" className={`nav-link ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <span className="icon">
              <BsFillPersonLinesFill />
            </span>
            Student
            <span className="dropdown-icon">{isDropdownOpen }</span>
          </Link>
         
        </li>
        <li>
          <Link to =  '/user/subject/view' className={`nav-link ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <span className="icon">
              <SlSocialSkype />
            </span>
            Subject
            <span className="dropdown-icon">{isDropdownOpen }</span>
          </Link>
         
        </li>
        <li>
          <Link to =  '/user/result/view' className={`nav-link ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <span className="icon">
              <PiTrademarkRegisteredLight />
            </span>
            Result
            <span className="dropdown-icon">{isDropdownOpen }</span>
          </Link>
         
        </li>
        <li>
          <Link to = '/user/feedback/add' className={`nav-link ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
            <span className="icon">
              <VscFeedback />
            </span>
            Feedback
            <span className="dropdown-icon">{isDropdownOpen }</span>
          </Link>
         
        </li>
        {/* <li>
          <Link to = "/" className="nav-link">
            <span className="icon">
              <FaSearch />
            </span>
            Subject
          </Link>
        </li>
         <li>
          <Link to = "/" className="nav-link">
            <span className="icon">
              <FaCompass />
            </span>
            Result
          </Link>
        </li>
        <li>
          <Link to = "/" className="nav-link">
            <span className="icon">
              <FaPlayCircle />
            </span>
            Feedback
          </Link>
        </li>
        <li>
          <Link to = "/" className="nav-link">
            <span className="icon">
              <FaFacebookMessenger />
            </span>
            Messages
          </Link>
        </li> */}
        {/* <li>
          <a href="#" className="nav-link">
            <span className="icon">
              <FaBell />
            </span>
            Notifications
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            <span className="icon">
              <FaPlus />
            </span>
            Create
          </a>
        </li>
         */}
        {/* <li>
          <Link to = "/" className="nav-link active">
            <img className="icon rounded-circle" src="https://avatars.githubusercontent.com/u/1743919?v=4" alt="Profile icon" />
            Profile
          </Link>
        </li> */}
        <li>
          <Link to = "/" className="nav-link active">
            {/* <img className="icon " src="https://avatars.githubusercontent.com/u/1743919?v=4" alt="Profile icon" onClick={logoutHandler}/> */}
          <FiLogOut/> &nbsp; Logout
          </Link>
        </li>
      </ul>

      
    </div>
  );
}

export default Sidebar;

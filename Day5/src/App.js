import React from "react";
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import { selectUser } from "./Pages/userSlice";
import Logout from "./Pages/Logout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./Pages/Student";
import MainPage from "./Pages/MainPage"; 
import Admin from "./Pages/Admin";

import ContactPage from "./Pages/ContactPage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Result from "./Pages/Student/Result";
import Subject from "./Pages/Student/Subject";
import Company from "./Pages/Student/Company";



const App = () => {
  const user = useSelector(selectUser);

  return (
    <Router>
      
      {/* <div>
        {user ? <Logout /> : <Login />}
      </div> */}
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/student" element={<Student />} />
      
      <Route path = "/admin" element={<Admin/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path = "/contact" element={<ContactPage/>}/>
      <Route path = "/about" element = {<AboutUs/>}/>
      <Route path = "/academic" element = {<Contact/>}/>
      <Route path = "/result" element = {<Result/>}/>
      <Route path = "/subject" element = {<Subject/>}/>
      <Route path = "/company" element = {<Company/>}/>
      </Routes>
    </Router>
  );
};

export default App;

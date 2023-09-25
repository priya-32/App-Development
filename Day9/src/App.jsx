import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Disclaimer from "./Pages/Disclaimer";
import Faqs from "./Pages/Faqs";
import CampusFacilities from "./Pages/CampusFacilities";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Student from "./Pages/Student";
import Result from "./Pages/Student/Result";
import Subject from "./Pages/Student/Subject";
import Company from "./Pages/Student/Company";
import { Contact } from "./components/contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/campus" element={<CampusFacilities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/student" element={<Student />} />
        <Route path = "/academic" element = {<Contact/>}/>
      <Route path = "/result" element = {<Result/>}/>
      <Route path = "/subject" element = {<Subject/>}/>
      <Route path = "/company" element = {<Company/>}/>
      </Routes>
    </Router>
  );
};

export default App;

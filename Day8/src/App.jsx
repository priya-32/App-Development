import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Disclaimer from "./Pages/Disclaimer";
import Faqs from "./Pages/Faqs";
import CampusFacilities from "./Pages/CampusFacilities";

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
      </Routes>
    </Router>
  );
};

export default App;

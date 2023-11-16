import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route } from "react-router-dom"
import Mainpage from './Pages/Mainpage';
import Home from './Pages/Home';
import SocialShareMenu from './Pages/SocialShareMenu';
import Aboutus from './Pages/Aboutus';
import { ContactUs } from './Pages/Contactus';
import BlogList from './Pages/BlogList';
import Department from './Pages/department';
import Academics from './Pages/Academics';

function App() {
  return (
    <div className="App">

      <Routes>
        
<Route path = "/" element = {<Home/>}/>
<Route path = "/contact" element = {<ContactUs/>}/>
<Route path = "/about" element = {<Aboutus/>}/>
<Route path='/blog' element = {<BlogList/>}/>
<Route path = "/academics" element = {<Academics/>}/>
      </Routes>
    </div>
  );
}

export default App;

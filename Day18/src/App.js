import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Mainpage from './Component/Mainpage';
import SmoothScroll from './Component/SmoothScroll';
import Campus from './Pages/Campus';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { UserAuth } from './Pages/Client/Auth/UserAuth';
import { Settings } from './Pages/Settings';
import UserPanel from './Pages/Client/UserPanel';
import Dashboard from './Dashboard';
import ViewProducts from './Pages/Admin/Product/ViewProducts';
import AddProduct from './Pages/Admin/Product/AddProduct';
import EditProduct from './Pages/Admin/Product/EditProduct';
import ViewUsers from './Pages/Admin/User/ViewUsers';
import { AdminAuth } from './Pages/Admin/Auth/AdminAuth';
import EditUser from './Pages/Admin/User/EditUser';
import ViewFeedbacks from './Pages/Admin/Feedback/ViewFeedbacks';


const App = () => {
  
  return (
    
      <div className="App">
        <SmoothScroll/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path = "/campus" element = {<Campus/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route element={<UserAuth />}>
          <Route exact path="/user/dashboard" element={<UserPanel />} />
          
          <Route exact path='/user/settings' element={<Settings/>} />
         
        </Route>


        <Route element={<AdminAuth />}>
          <Route exact path='/admin/dashboard' element={<Dashboard />} />
          <Route exact path='/admin/products/view' element={<ViewProducts />} />
          <Route exact path='/admin/product/add' element={<AddProduct />} />
          <Route exact path='/admin/product/edit/:productId' element={<EditProduct />} />
          <Route exact path='/admin/user/view' element={<ViewUsers />} />
          <Route exact path='/admin/user/edit/:userId' element={<EditUser />} />
          <Route exact path='/admin/feedbacks/view' element={<ViewFeedbacks />} />
        </Route>
        </Routes>
       
      </div>
   
  );
}

export default App;

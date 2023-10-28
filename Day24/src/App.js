import logo from './logo.svg';
import './App.css';
import LoginForm from './Pages/Login';
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register';
import Home from './Pages/Admin/Home/Home';
import AddStudent from './Pages/Admin/Student/AddStudent';
import { AdminAuth } from './Pages/Admin/Auth/AdminAuth';
import ViewStudent from './Pages/Admin/Student/ViewStudent';
import EditStudent from './Pages/Admin/Student/EditStudent';
import { UserAuth } from './Pages/Student/Auth/UserAuth';
import UserPanel from './Pages/Student/UserPanel/UserPanel';
import './Pages/Student/ViewStudent.jsx'
import AddSubject from './Pages/Admin/Subject/AddSubject';
import ViewSubject from './Pages/Admin/Subject/ViewSubject';
import EditSubject from './Pages/Admin/Subject/EditSubject';
import AddResult from './Pages/Admin/Result/AddResult';
import ViewResult from './Pages/Admin/Result/ViewResult';
import ViewResult1 from './Pages/Student/ViewResult';
import ViewSubject1 from './Pages/Student/ViewSubject1';
import EditResult from './Pages/Admin/Result/EditResult';
import Addfeedback from './Pages/Student/Addfeedback';
import ViewFeedback from './Pages/Admin/Feedback/ViewFeedback';
function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<LoginForm/>}/>
      <Route  path='/register' element={<Register />} />


      <Route element={<AdminAuth />}>
      <Route exact path = "/admin/dashboard" element = {<Home/>}/>
      <Route exact path='/admin/student/add' element={<AddStudent />} />
      <Route exact path='/admin/student/view' element={<ViewStudent />} />
      <Route exact path='/admin/student/edit/:sId' element={<EditStudent />} />
      <Route exact path='/admin/subject/addSub' element={<AddSubject />} />
      <Route exact path='/admin/subject/view' element={<ViewSubject />} />
      <Route exact path='/admin/subject/edit/:subId' element={<EditSubject />} />
      <Route exact path='/admin/result/addRes' element={<AddResult />} />
      <Route exact path='/admin/result/viewRes' element={<ViewResult />} />
      <Route exact path='/admin/result/edit/:resId' element={<EditResult />} />
      <Route exact path='/admin/feedback/viewFeed' element={<ViewFeedback />} />

      </Route>

      <Route element={<UserAuth />}>
          <Route exact path="/user/dashboard" element={<UserPanel />} />
          <Route exact path='/user/student/view' element={<ViewStudent />} />
          <Route exact path='/user/result/view' element={<ViewResult1 />} />
          <Route exact path='/user/subject/view' element={<ViewSubject1 />} />
          <Route exact path='/user/feedback/add' element={<Addfeedback />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;

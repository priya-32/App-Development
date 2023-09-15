import {Route,Routes,Link} from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/signup';

import Forgott from './Pages/forget';
import './App.css'
import ResetPassword from './Pages/reset';

function App() {
  return (
    <div className='App'>  
     <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/reset' element={<ResetPassword/>}/>
<Route path='/forget' element={<Forgott/>}/>

    </Routes>
      </div>
  );
}
export default App;

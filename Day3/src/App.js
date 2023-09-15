import React from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Router>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Router>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../service/api.js';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar.jsx';
import '../Assets/Styles/Login.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginForm = () => {
  const [isSignIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const res = await userLogin(signin);

        if ((res.status) == "200" && (res.data.role)=== "STUDENT")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phone);
            localStorage.setItem('xuserAddress', res.data.address);

            toast.success(` Welcome ${res.data.name} !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/user/dashboard');
            }, 1500);

        }
        
        else if((res.status) == "200" && (res.data.role)=== "ADMIN"){
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

            toast.success(` Welcome ${res.data.name} !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1500);
        }
      }
      catch (error) {
        // Handle login error here
        if (error.response && error.response.status === 403) {
          toast.error('Invalid email or password', {
            position: 'bottom-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else {
          // Handle other errors (e.g., network issues)
          console.error('Login error:', error);
          toast.error('An error occurred while logging in', {
            position: 'bottom-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      }
    };
  return (
    <div className='login-wrapper'>
     
      <section>
        <div className={`container ${isSignIn ? 'active' : ''}`}>
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://t4.ftcdn.net/jpg/03/84/80/15/360_F_384801563_Q8upHX3aymAdQsxTlTJTmgulyTfrIMIY.jpg"
                alt=""
              />
            </div>
            <div className="formBx">
              <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email" onChange={handleChange} 
                  className='auth-field' required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password" onChange={handleChange}                    className='auth-field' required
                />
                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                <p className="signup">
                  Don't have an account?
              <Link to='/register' className='auth-links'>Register</Link>
                </p>
                <div class="social-media">
  <ul>
    <li>
      <a href="https://www.facebook.com" target="_blank">
        <img src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/facebook.png" alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" target="_blank">
        <img src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/twitter.png" alt="Twitter" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com" target="_blank">
        <img src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/linkedin.png" alt="LinkedIn" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" target="_blank">
        <img src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/instagram.png" alt="Instagram" />
      </a>
    </li>
  </ul>
</div>

              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </div>
  );
};

export default LoginForm;

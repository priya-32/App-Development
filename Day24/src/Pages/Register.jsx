import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../service/api';
import { ToastContainer, toast } from 'react-toastify';
const Register = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address: '',
        role: 'student',
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await userRegister(signup);
      
          if (res.status === 200) {
            if (res.data === "User registered successfully") {
              toast.success(`Signup Successful!`, {
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
                navigate('/login');
              }, 1500);
            } else if (res.data === "Email Already Exists") {
              toast.error(`Email Already Exists!`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else if (res.status === 400) {
            toast.error(`Something went wrong!`, {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } catch (error) {
          // Handle any errors that occur during the request.
          console.error("An error occurred:", error);
      
          // You can display an error message to the user here, for example:
          toast.error(`An error occurred: ${error.message}`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      
    };

  return (
    <div className='login-wrapper'>
      
      <section>
        <div className="container">
          <div className="user signupBx">
            <div className="formBx">
              <form action="" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required />
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required />
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />
                            <textarea name="address" id="address" cols="40" rows="2" placeholder='Address' onChange={handleChange} className='auth-field' required/>
                            <button type='submit' className='auth-btn app-x-shadow'>Register</button>
                <p className="signup">
                  Already have an account?
                  <Link to='/login' className='auth-links'>Login</Link>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://t3.ftcdn.net/jpg/06/12/79/66/360_F_612796607_uQKmjfEX8f2CgEznELizfPqueMPDUSzd.jpg"
                alt=""
              />
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

export default Register;

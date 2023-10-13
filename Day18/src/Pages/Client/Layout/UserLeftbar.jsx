import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './UserLeftbar.css';
function UserLeftbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderHandler = () => {
        navigate('/user/orders');
    };

    const settingsHandler = () => {
        navigate('/user/settings');
    };

    const logoutHandler = () => {
        
        dispatch({ type: 'LOGOUT_USER' });

        
        navigate('/login');
    };

    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={orderHandler}>
                        Student
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        Settings
                    </button>

                    <button className='left-bar-button-logout-x nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}

export default UserLeftbar;

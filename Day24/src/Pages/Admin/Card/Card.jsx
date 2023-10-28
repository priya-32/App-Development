import "./Card.css";
import { IoIosArrowUp } from 'react-icons/io';
import { FaUser, FaShoppingCart, FaMoneyBill, FaWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useState, useEffect } from 'react';
const Card = ({ type }) => {
  let data;
  const navigate = useNavigate();
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);
  // Temporary data
  const amount = 100;


  switch (type) {
    case "user":
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <FaUser
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <FaShoppingCart
            className="icon"
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: false,
        link: 'View net earnings',
        icon: (
          <FaMoneyBill
            className="icon"
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: false,
        link: 'See details',
        icon: (
          <FaWallet
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'green',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney } {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right12">
        {data.icon}
      </div>
    </div>
  );
};

export default Card;

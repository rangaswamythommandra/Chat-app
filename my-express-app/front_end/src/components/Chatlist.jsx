import React from 'react';
import { Link } from 'react-router-dom';
import './Chatlist.css'

const Chatlist = () => {
  return (
    <div className="chat-container">
      <div className="chat-list-container">
        <h2>Friends</h2>
       
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
               Ranga
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              <Link className='user-link' to="/chat/1">NUNNA DUNNA</Link>
          
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              Harsha
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              Yesho
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chatlist;
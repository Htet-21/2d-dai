import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <div>
            <p className='credentials'>Login ID</p>
             <input type="text" placeholder="Enter Your Login ID" className="name"/>
           </div>
           <div className="second-input">
           <p className='credentials'>password</p>
             <input type="password" placeholder="Enter Your password" className="name"/>
             <p id='rcorner'></p>
            <p className='remember'>Remember</p>          
            <p className="link">
              <Link to="/register">Forgot password?</Link>
            </p>
           </div>
           <div className="login-button">
          <button>Login</button>
          <p className="buttom">
          Not a member? <Link to="/registerinfo">Register Now</Link>
            </p>
          </div>

        </div>
    );
}
 
export default Login;
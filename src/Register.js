import Home from './Home'
import './Login.css'
import { Link } from 'react-router-dom';

const  register = () => {
    return (
        <div className="App">
        <div className="content">
           <Home />
           <div className="Login">
            <div className="username">
            <p id='credentials'>Phone No</p>
            <input type="text" placeholder="Enter Your Phone Number" className="name"/>
            </div>
            <div className="login-button">
            <Link to="/otp"><button>Continue</button></Link> 
          <p className="buttom">
          Not a member? <Link to="/registerinfo"> Register Now</Link> 
            </p>
          </div>
        </div>
        </div>
      </div>
        
        
    );
}
 
export default register;
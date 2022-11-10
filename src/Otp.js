import Home from './Home'
import './Login.css'
import Password from './password';
import { Link } from 'react-router-dom';

const  Otp = () => {
    return (
        <div className="App">
        <div className="content">
           <Home />
           <div className="Login">
            <div className="username">
            <p id='credentials'>OTP</p>
            <input type="text" placeholder="Enter Your OTP" className="name"/>
            </div>
            <div className="login-button">
            <Link to="/password"><button>Continue</button></Link> 
          </div>
        </div>
        </div>
      </div>
        
        
    );
}
 
export default Otp;
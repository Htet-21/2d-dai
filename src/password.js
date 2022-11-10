import Home from './Home'
import './Login.css'
import { Link } from 'react-router-dom';

const  Password = () => {
    return (
        <div className="App">
        <div className="content">
           <Home />
           <div className="Login">
            <div className="username">
            <p id='newpass'>New Password</p>
            <input type="text" placeholder="Enter Your New Password" className="name"/>
            </div>
            <div className="username">
            <p id='comfirmpass'>Comfirm Password</p>
            <input type="text" placeholder="Enter Comfirm Password" className="name"/>
            </div>
            <div className="login-button">
            <Link to="/"><button>Continue</button></Link> 
          </div>
        </div>
        </div>
      </div>
        
        
    );
}
 
export default Password;
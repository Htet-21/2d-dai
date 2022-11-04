import Home from './Home'
import './Login.css'

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
          <button>Continue</button>
          <p className="buttom">
          Not a member? <a href="#">Register Now</a>
            </p>
          </div>
        </div>
        </div>
      </div>
        
        
    );
}
 
export default register;
import './Login.css'

const  Login = () => {
    return (
        <div className="Login">
            <div className="username">
            <p id='credentials'>Login ID</p>
            <p id="username">Enter Your Login ID</p>
            </div>
            <div className="password">
            <p id='credentials'>Password</p>
            <p id="password">Enter Your Password</p>
            </div>
            <div className="comfirm">
            <p id='comfirm'>Login</p>
            </div>
        </div>
    );
}
 
export default Login;
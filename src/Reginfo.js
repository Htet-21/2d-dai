import React from 'react';
import './Login.css';
import './Reginfo.css';
import calender from './calendar.svg';
import nrc from './nrc.png';
import { Link } from "react-router-dom";

const  Reginfo = () => {
    return (
        <div className="Reginfo">
            <div className="header">
                <p>Register Information</p>
            </div>
            <div>
            <p className='credential'>Name</p>
             <input type="username" placeholder="Enter Your Login ID" className="name"/>
           </div>
           <div className="second-input">
           <p className='credentials'>Phone NO</p>
             <input type="text" placeholder="Enter Your password" className="name"/>
           </div>
           <div className="second-input">
           <p className='credentials'>NRC NO</p>
             <input type="text" className="nrc1"/>
             <input type="text" className="nrc2"/>
             <input type="text" className="nrc1"/>
           </div><br/>
           <input type="text" placeholder="123456" className="num"/>
           <div className="second-input">
           <p className='dob'>Date of Birth (DD/MM/YYYY)</p>
           <input type="text" placeholder="Enter Your Date Of Birth" className="date"/>
           <img src={calender} />
           </div>
           <div className="second-input">
           <p className='nrc-text'>Front &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back</p>
           <img id='pic1' src={nrc} />
           <img id='pic' src={nrc} />
           </div>
           <div className="second-input">
           <p className='address-t'>Address Detail</p>
             <input type="text" placeholder="Please Enter Your Address Detail" className="address"/>
           </div>
           <div className="login-button">
           <Link to="/otp"><button>Continue</button></Link>
          <p className="buttom">
          Already a member?<Link to="/"> Sign In</Link>
            </p>
          </div>

        </div>
    );
}
 
export default Reginfo;
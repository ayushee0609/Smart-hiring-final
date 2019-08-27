import React, { Component } from 'react';
// import './ForgotPassword.css';
import { Link } from 'react-router-dom';


class ForgotPassword extends Component {
  render() {
    return (
      <div className="App"><br/><br/>
      <div className="t"><h3>Forgot Password</h3></div>
      <form>
      <div>
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div><br/>

      <div>
      <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
      </div><br/>
      <div>      
    <input type="text" placeholder="OTP" name="otp" size ="30" required></input>
    </div><br/>
      <div>
      <input type="password" placeholder="NEW PASSWORD" name="password" size ="30" required></input>
      </div><br/>
      <div>
      <input type="password" placeholder="CONFIRM NEW PASSWORD" name="password" size ="30" required></input>
      </div><br/>

      <Link to="/Login"><button class="button1">BACK TO LOGIN</button></Link>
      </form>

      </div>
    );
  }
}

export default ForgotPassword;
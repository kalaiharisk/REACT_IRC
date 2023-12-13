import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
export default class LoginPage extends Component {
  render() {
    return (
      //  <div class="center">
      //   <input type="checkbox" id="show"/>
      //   <label for="show" class="show-btn">View Form</label>
        <div class="container">
           <label for="show" class="close-btn fas fa-times" title="close"></label>
           <div class="text">
              Login Form
           </div>
           <form action="#">
              <div class="data">
                 <label>Email or Phone</label>
                 <input type="text" required/>
              </div>
              <div class="data">
                 <label>Password</label>
                 <input type="password" minLength={8} maxLength={16} required/>
              </div>
              <div class="forgot-pass">
                 <a href="#">Forgot Password?</a>
              </div>
              <div class="btn">
                 <div class="inner"></div>
                 <Link to='/Home'><button type="submit">login</button></Link>
              </div>
              <div class="signup-link">
                 Not a member? <Link to='/Register'>Signup</Link>
              </div>
           </form>
        </div>
      //   </div>
    )
  }
}

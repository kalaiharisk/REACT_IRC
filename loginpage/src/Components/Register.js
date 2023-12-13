import React from 'react'
import './Register.css'
const Register=()=> {
    return (
      <div>
      <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" required/>
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="email" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="number" placeholder="Enter your number" maxLength={10} required/>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="password" placeholder="Enter your password"  minLength={8} maxLength={16} required/>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="password" placeholder="Confirm your password" minLength={8} maxLength={16} required/>
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div class="button">
             <input type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div> 
      </div>
    )
}
export default Register;

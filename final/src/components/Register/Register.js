import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';  // Add a new CSS file for SignUpPage styles

export default function Register() {
    return (
        <div classname="abc">
        <div className="signup-container">
            <h2 className="signup-title">Join us</h2>
            <h5 className="signup-subtitle">Create your personal account</h5>
            <form action="/home" className="signup-form">
                <p className="form-field">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" id="username" name="username" required className="input-field" />
                </p>
                <p className="form-field">
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" id="email" name="email" required className="input-field" />
                </p>
                <p className="form-field">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" required className="input-field" />
                </p>
                <p className="form-field">
                    <input type="checkbox" id="checkbox" name="checkbox" required className="checkbox" />{' '}
                    <span className="checkbox-text">
                        I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>.
                    </span>
                </p>
                <p className="form-field">
                    <Link to="/"><button id="sub_btn" type="submit" className="submit-button">Register</button></Link>
                </p>
            </form>
            <footer className="signup-footer">
                <p><Link to="/" className="back-link">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    );
}

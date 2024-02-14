import React from "react";
import GoogleLogin from "react-google-login";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clientId = process.env.REACT_APP_appClientID;
function Login() {

    const navigate = useNavigate();
    const onSuccess = (res) => {
        navigate('/');
    }
    const onFailure = (res) => {
        console.log('Failed to login', res);
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');

        
    };

    const handleGoogleLogin = () => {
        navigate('/');
    };

    return (
        <div className="Login-container">
            <h2>Login</h2>
           { console.log(process.env.REACT_APP_TEMP,"env data")}
            <form onSubmit={handleSubmit} name="loginForm">
                <div className="loginform">
                    <div>
                        <label htmlFor="username">username</label>
                        <input
                            name="name"
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input
                            name="pwd"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="login-button" onClick={handleSubmit}>
                    login
                </button><br/>
                other signin option
                <br/>
                <GoogleLogin
                clientId={clientId}
                buttonText="login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                onClick={handleGoogleLogin}
            />
            </form>
        </div>
    )
}
export default Login;
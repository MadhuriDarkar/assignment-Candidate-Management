import GoogleLogin from "react-google-login";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { GoogleLogout } from "react-google-login";


const clientId = "183169153771-p39cdoip4ak57f8u6jdfe3mjiaj2k5cs.apps.googleusercontent.com";


function Login() {

    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log('logged in successfully', res.profileObj);
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
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/');
    };

    const handleGoogleLogin = () => {

        console.log('User clicked on Google Sign-In button');

        navigate('/');
    };

    return (
        <div className="Login-container">
            <h2>Login</h2>
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
             {/* <GoogleLogout
              clientId={clientId}
              buttonText="logout"
              onLogoutSuccess={onSuccess}
            /> */}

            </form>

           

        </div>
    )
}
export default Login;
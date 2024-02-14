import './App.css';
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/home";
import { GoogleLogout } from 'react-google-login';
import AddCandidateForm from './Form/AddCandidateForm';
import { useEffect } from 'react';
import { gapi } from "gapi-script";

const clientId = process.env.REACT_APP_appClientID;
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });
  const onSuccess = (res) => {
    console.log("logged out successfully");
    window.location.href = '/login';
  }

  return (
    <div className="App">
      <Router>
        <div>
          <div className='navbar row'>
            <Link to="/">Home</Link>
            <GoogleLogout
              className='googleLogoutButton'
              clientId={clientId}
              buttonText="logout"
              onLogoutSuccess={onSuccess}
            />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/candidate/new' element={<AddCandidateForm />} />
          </Routes>
        </div>
      </Router >
    </div >
  );
}

export default App;

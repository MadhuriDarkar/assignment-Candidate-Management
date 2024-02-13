import './App.css';
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/home";
import { GoogleLogout } from 'react-google-login';
import CandidateForm from './Form/CandidateForm';
import { useEffect } from 'react';
import { gapi } from "gapi-script";


const clientId = "http://183169153771-14f0ptr2pute4l72qr4hphfhua6rll6h.apps.googleusercontent.com";

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
  const onSuccess = (res) =>{
    console.log("logged out successfullt");
}

  return (
    <div className="App">
      <Router>
        <div>
        <div className='navbar row'>
        <Link className='homelink' to="/">Home</Link> 
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
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path='/candidate/new' element={<CandidateForm />} />
          </Routes>
        </div>
      </Router >
      {/* <Home/>
      <Login/>
      <Logout/> */}
    </div >
  );
}

export default App;

import { GoogleLogout } from "react-google-login";

const clientId = "183169153771-p39cdoip4ak57f8u6jdfe3mjiaj2k5cs.apps.googleusercontent.com";

function Logout(){
    
    const onSuccess = (res) =>{
        console.log("logged out successfullt");
            window.location.href = '/login';
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
              clientId={clientId}
              buttonText="logout"
              onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout;


import React, { useState } from "react";
//import { UserContextType, UserDetails } from "./type";

const StepContex = () =>{
    const [ curStep, setStep] = useState(1);
    const [userData, setUserData]= useState({});
    const [ finalData, setFinalData]= useState({});
    const submitData=()=>{
        console.log("data submitted");
    }
   return(
    <div>
      <multiStepContext.Provider value={{curStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
        <App/>
      </multiStepContext.Provider>
    </div>
   )
}
export default StepContex;
// export const UserContext = React.createContext < UserContextType | null > (null);
// function UsersProvider(props: { children: React.ReactNode }) {
//   const [users, setUsers] = useState < UserDetails[] > ([]);
//   const setUser = (user: UserDetails[]) => { setUsers(user) }
//   return (
//     <UserContext.Provider value={{ users, setUser }}>
//       {props.children}</UserContext.Provider>)
// } export default UsersProvider;

// export const multiStepContext = React.createContext();

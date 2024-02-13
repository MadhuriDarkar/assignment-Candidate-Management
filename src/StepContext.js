import React, { useContext, useState } from "react";
import App from './App'
 
export const multiStepContext = React.createContext();

const StepContex = () =>{
    const [ curStep, setStep] = useState(1);
    const [userData, setUserData]= useState([]);
    const [ finalData, setFinalData]= useState([]);
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
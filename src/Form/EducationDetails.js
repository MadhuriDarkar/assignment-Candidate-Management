import React, {useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";


const EducationDetails = ()=>{

    const {setStep, userData, setUserData}= useContext(multiStepContext);
 return(
    <div>
         <div>
        <div>
        <TextField label='institution' variant="outlined" />
        </div>
        <div>
        <TextField label='graduation' variant="outlined" />
        </div>
        <div>
        <Button variant="contianed" onClick={setStep(1)} color="primary">Back</Button>
        <Button variant="contianed" onClick={()=>setStep(3)} color="primary">Next</Button>
        </div>
    </div>
    </div>
 )
}
export default EducationDetails;
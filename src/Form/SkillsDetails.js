import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

 const SkillsDetails = () =>{
    const {setStep, userData, setUserData}= useContext(multiStepContext);
    return(
        <div>
        <div>
        <TextField label=' skill' variant="outlined" />
        </div>
        <div>
        <TextField label='experienceInMonths' variant="outlined" />
        </div>
        <div>
        <Button variant="contianed" onClick={setStep(2)} color="primary">Back</Button>
        <Button variant="contianed"  onClick={()=>setStep(4)} color="primary">Next</Button>
        </div>
    </div>
    )
 }
 export default SkillsDetails;
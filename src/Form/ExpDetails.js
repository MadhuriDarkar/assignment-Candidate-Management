import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
const  ExpDetails= ()=>{
    const {setStep, userData, setUserData, submitData}= useContext(multiStepContext);
  return(
    <div>
        <div>
        <TextField label='company' variant="outlined" />
        </div>
        <div>
        <TextField label='project' variant="outlined" />
        </div>
        <div>
        <TextField label='role' variant="outlined" />
        </div>
        <div>
        <TextField label='duration' variant="outlined" />
        </div>
        <div>
        <Button variant="contianed" onClick={setStep(3)} color="primary">Back</Button>
        <Button variant="contianed" onClick={submitData} color="primary">Next</Button>
        </div>
    </div>
  )
}
export default ExpDetails;
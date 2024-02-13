import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

const PersonalDetails = ()=> {
    const {setStep, userData, setUserData}= useContext(multiStepContext)
  return(
    <div>
        <div>
        <TextField label='profile' variant="outlined" />
        </div>
        <div>
        <TextField label='name' variant="outlined" />
        </div>
        <div>
        <TextField label='email' variant="outlined" />
        </div>
        <div>
        <TextField label='gender' variant="outlined" />
        </div>
        <div>
        <TextField label='hobbies' variant="outlined" />
        </div>
        <div>
        <Button variant="contianed" onClick={setStep(2)} color="primary">Next</Button>
        </div>
    </div>
  )
}
export default PersonalDetails
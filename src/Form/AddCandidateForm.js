import React, { useState } from "react";
//import PersonalDetails from "./PersonalDetails";
//import EducationDetails from "./EducationDetails";
//import ExpDetails from "./ExpDetails";
//import SkillsDetails from "./SkillsDetails";
import { Step, Stepper, StepLabel, Button, TextField} from "@material-ui/core";
//import { multiStepContext } from "../StepContext";


const AddCandidateForm = () => {
    // const {curStep, finalData} = useContext(multiStepContext);
    const [ curStep, setStep] = useState(1);
     const [userData, setUserData]= useState([]);
     const [ finalData, setFinalData]= useState([]);
    
     const handleNext=()=>{
        console.log(setStep,"next button")
        setStep(2)
    }
    const showStep=(step)=> {
        switch(step) {
            case 1 :
                return <PersonalDetails/>
            case 2 :
                return <EducationDetails/>
            case 3:
                return <SkillsDetails/>
            case 4:
                return <ExpDetails/>
        }
    };
    const PersonalDetails = ()=> {
       
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
            <Button variant="outlined" onClick={handleNext} color="primary">Next</Button>
            </div>
        </div>
      )
    };

    const EducationDetails = ()=>{
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
            <Button variant="outlined" onClick={setStep(1)} color="primary">Back</Button>
            <Button variant="outlined" onClick={()=>setStep(3)} color="primary">Next</Button>
            </div>
        </div>
        </div>
     )
    }

    const SkillsDetails = () =>{
        //const {setStep, userData, setUserData}= useContext(multiStepContext);
        return(
            <div>
            <div>
            <TextField label=' skill' variant="outlined" />
            </div>
            <div>
            <TextField label='experienceInMonths' variant="outlined" />
            </div>
            <div>
            <Button variant="outlined" onClick={setStep(2)} color="primary">Back</Button>
            <Button variant="outlined"  onClick={()=>setStep(4)} color="primary">Next</Button>
            </div>
        </div>
        )
     }

     const  ExpDetails= ()=>{
       // const {setStep, userData, setUserData, submitData}= useContext(multiStepContext);
        const submitData=()=>{
            console.log("data submitted");
        }
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
            <Button variant="outlined" onClick={setStep(3)} color="primary">Back</Button>
            <Button variant="outlined" onClick={submitData} color="primary">Next</Button>
            </div>
        </div>
      )
    }

return(
    <div>
        <h3 style={{color:"black", textDecoration:'underline'}}>Enter Your Details</h3>
        <div className='center-stepper'>
            <Stepper style={{width:'30%'}} activeStep={curStep-1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
        </div>
        {showStep(curStep)}

    </div>
)
}
export default AddCandidateForm;
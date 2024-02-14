import React, { useContext, useEffect, useState } from "react";
import { Step, Stepper, StepLabel, Button, TextField } from "@material-ui/core";
import axios from "axios";
import './AddCandidateForm.css'


const AddCandidateForm = () => {

    const [candidates, setCandidates] = useState([]);
    const [curStep, setStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState({});
    

    // const [clickCount, setClickCount]= useState(0);

    // const addcount =() =>{
    //  setClickCount(clickCount +1);
    //  console.log(clickCount,"time click add button"); 
    // };

    useEffect(() => {
        // Function to fetch data of the candidate from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://60d5a2c2943aa60017768b01.mockapi.io/candidate');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        return () => {
        };
    }, []);


    const handleCardClick = (id) => {
        console.log('Clicked on candidate with ID:', id);
       // const candidate = candidates.find(candidate => candidate.id === id);
    };
    const handleAddCandidate = () => {
        window.location.href = '/candidate/new';
    }

    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const submitData = async (e) => {
        e.preventDefault();

        try {
            console.log(userData, "submit userdat")
            await axios.post('https://60d5a2c2943aa60017768b01.mockapi.io/candidate', userData);
            setFinalData(userData);
            await timeout(1000);
            setUserData("");
            setStep(1);
            console.log(finalData, "submitted data");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const showStep = (step) => {

        switch (step) {
            case 1:
                console.log(userData, "personal data")
                return (
                    <div>

                        <div>
                            <TextField type="file" accept="image" label='profile' variant="outlined" margin="normal" />
                        </div>
                        <div>
                            <TextField label='name' value={userData['name']} onChange={(e) => setUserData({ ...userData, "name": e.target.value })} margin="normal" variant="outlined" />
                        </div>
                        <div>
                            <TextField label='email' value={userData['email']} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='gender' value={userData['gender']} onChange={(e) => setUserData({ ...userData, "gender": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='hobbies' value={userData['hobbies']} onChange={(e) => setUserData({ ...userData, "hobbies": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={() => setStep(2)} color="primary">Next</Button>
                        </div>

                    </div>
                )
            case 2:
                console.log(userData, "case 2")
                return (
                    <div>
                        <div>
                            <div>
                                <TextField label='institution' value={userData['institution']} onChange={(e) => setUserData({ ...userData, "institution": e.target.value })} variant="outlined" />
                            </div>
                            <div>
                                <TextField label='graduation' value={userData['graduation']} onChange={(e) => setUserData({ ...userData, "graduation": e.target.value })} variant="outlined" />
                            </div>
                            <div>
                                <Button variant="outlined" onClick={() => setStep(1)} color="primary">Back</Button>
                                <Button variant="outlined" onClick={() => setStep(3)} color="primary">Next</Button>
                                {/* <Button onClick={addcount} color="primary">Add</Button> */}
                            </div>
                        </div>
                    </div>
                )
            case 3:
                console.log(userData, "case3")
                return (
                    <div>
                        <div>
                            <TextField label='skill' value={userData['skill']} onChange={(e) => setUserData({ ...userData, "skill": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='experienceInMonths' value={userData['experienceInMonths']} onChange={(e) => setUserData({ ...userData, "experienceInMonths": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={() => setStep(2)} color="primary">Back</Button>
                            <Button variant="outlined" onClick={() => setStep(4)} color="primary">Next</Button>
                        </div>
                    </div>
                )
            case 4:
                console.log(userData, "case 4")
                return (
                    <div>
                        <div>
                            <TextField label='company' value={userData['company']} onChange={(e) => setUserData({ ...userData, "company": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='project' value={userData['project']} onChange={(e) => setUserData({ ...userData, "project": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='role' value={userData['role']} onChange={(e) => setUserData({ ...userData, "role": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <TextField label='duration' value={userData['duration']} onChange={(e) => setUserData({ ...userData, "duration": e.target.value })} variant="outlined" />
                        </div>
                        <div>
                            <Button variant="outlined" onClick={() => setStep(3)} color="primary">Back</Button>
                            <Button variant="outlined" onClick={submitData} color="primary">Submit</Button>
                        </div>
                    </div>
                )
        }
    };

    return (
        <div className="container">
            <div className="sectionholder">
                <div className="left-section">

                    <h2 className='listHeader'>List of Candidates</h2>

                    {candidates.map(candidate => (
                        <div key={candidate.id} className="card" onClick={() => handleCardClick(candidate.id)}>
                            <h3>{candidate.name}</h3>

                        </div>
                    ))}


                    <button className='add-button' onClick={handleAddCandidate}>Add</button>

                </div>

                <div className="right-section">
                    <h3 style={{ color: "black", textDecoration: 'underline' }}>Enter Your Details</h3>
                    <div className='center-stepper'>
                        <Stepper style={{ width: '30%' }} activeStep={curStep - 1} orientation="horizontal">
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
            </div>
        </div>
    )
}
export default AddCandidateForm;
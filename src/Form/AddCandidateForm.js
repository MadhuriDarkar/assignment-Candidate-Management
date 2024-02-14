import React, { useContext, useEffect, useState } from "react";
import { Step, Stepper, StepLabel, Button, TextField } from "@material-ui/core";
import axios from "axios";
import './AddCandidateForm.css'


const AddCandidateForm = () => {

    const [candidates, setCandidates] = useState([]);
    const [curStep, setStep] = useState(1);
    const [userData, setUserData] = useState({
        education: [{}],
        skills: [{}],
        experience: [{}]
    });
    const [finalData, setFinalData] = useState({});

    const handleInputChange = (section, index, name, value) => {
        const updatedData = { ...userData };
        updatedData[section][index][name] = value;
        setUserData(updatedData);
    };

    const handleChange = (section,e, label, index) => {
        const { value } = e.target;
        handleInputChange(section, index, label, value);
    };

    const addEntry = (section) => {

        if (userData[section].length < 10) {
            const updatedData = { ...userData };
            updatedData[section].push({});
            setUserData(updatedData);
        } else {
            alert(`You can only add up to 10 entries.`);
        }
    };

    const removeEntry = (section, index) => {
        const updatedData = { ...userData };
        updatedData[section].splice(index, 1);
        setUserData(updatedData);
    };

    const onNext = (x) => {
        const updatedData = { ...userData };
        setStep(x);
        setUserData(updatedData);

    }

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

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const showStep = (step) => {

        switch (step) {
            case 1:

                return (
                    <div>

                        <div>
                            <TextField className="inputFieldPic" type="file" accept="image" label='profile' variant="outlined" margin="normal"  />
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

                return (
                    <div>
                        <div>

                            <div>
                                {userData.education.map((entry, index) => (
                                    <div key={index}>
                                        {/* Education Details Form Fields */}
                                        <div>
                                            <TextField label='institution' value={entry['institution'] ? entry['institution'] : ""} onChange={(e) => handleChange('education',e, 'institution', index)} variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField label='graduation' value={entry['graduation'] ? entry['graduation'] : ""} onChange={(e) => handleChange('education',e, 'graduation', index)} variant="outlined" />
                                        </div>
                                    </div>
                                ))}
                                <Button variant='outlined' color="primary" onClick={() => removeEntry('education')}>Remove</Button>
                                <Button variant='outlined' color="primary" onClick={() => addEntry('education')}>Add</Button>
                                <div>
                                    <Button variant="outlined" onClick={() => setStep(1)} color="primary">Back</Button>
                                    <Button variant="outlined" onClick={() => onNext(3)} color="primary">Next</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 3:

                return (
                    <div>
                        {userData.skills.map((entry,index) => (
                            <div key={index}>
                                {/* Skills Form Fields */}
                                <div>                                                                  
                                    <TextField label='skill' value={entry['skill']?entry['skill']:""} onChange={(e) => handleChange('skills',e, 'skill',index)} variant="outlined" />
                                </div>
                                <div>
                                    <TextField label='experienceInMonths' value={entry['experienceInMonths']?entry['experienceInMonths']:""} onChange={(e) => handleChange('skills',e, 'experienceInMonths',index)} variant="outlined" />
                                </div>
                            </div>
                        ))}
                        <Button variant='outlined' color="primary" onClick={() => removeEntry('skills')}>Remove</Button>
                        <Button variant="outlined" onClick={() => addEntry('skills')} color="primary">Add</Button>
                        <div>
                            <Button variant="outlined" onClick={() => setStep(2)} color="primary">Back</Button>
                            <Button variant="outlined" onClick={() => onNext(4)} color="primary">Next</Button>
                        </div>
                    </div>
                )
            case 4:

                return (
                    <div>
                        {userData.experience.map((entry,index) => (
                            <div key={index}>
                                {/* Experience Form Fields */}
                                <div>
                                    <TextField label='company' value={entry['company']?entry['company']:""} onChange={(e) => handleChange('experience',e, "company",index )} variant="outlined" />
                                </div>
                                <div>
                                    <TextField label='project' value={entry['project']?entry['project']:""} onChange={(e) => handleChange('experience',e, "project",index )} variant="outlined" />
                                </div>
                                <div>
                                    <TextField label='role' value={entry['role']?entry['role']:""} onChange={(e) => handleChange('experience',e, "role",index )} variant="outlined" />
                                </div>
                                <div>
                                    <TextField label='duration' value={entry['duration']?entry['duration']:""} onChange={(e) => handleChange('experience',e, "duration",index )} variant="outlined" />
                                </div>

                            </div>
                        ))}
                        <Button variant='outlined' color="primary" onClick={() => removeEntry('experience')}>Remove</Button>
                        <Button variant='outlined' color="primary" onClick={() => addEntry('experience')}>Add</Button>
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
                                <StepLabel> Enter Personal Details</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Enter Education Details</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel> Enter your skills</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel> Your Experience</StepLabel>
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
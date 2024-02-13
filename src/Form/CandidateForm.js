import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';

const CandidateForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {
      profilePicture: '',
      name: '',
      email: '',
      gender: '',
      hobbies: '',
    },
    education:
      [{
        institution: '',
        graduation: '',
      }],
    skills: [{
      skill: '',
      experienceInMonths: ''
    }],

    experience: [
      {
        company: '',
        project: '',
        role: '',
        duration: ''
      }
    ]
  });


  const handleChange = (step, field, value) => {
    if (step === 'personalDetails') {
      setFormData(prevData => ({
        ...prevData,
        [step]: {
          ...prevData[step],
          [field]: value
        }
      }));
    }
    else {
      setFormData(prevData => ({
        ...prevData,
        [step]: value
      }));
    }


  };

  const handleSubmit = () => {
    // You can submit the form data here
    console.log(formData);
  };

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
    {console.log(formData, "personal details data of candidate")}
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsForm
            formData={formData.personalDetails}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <EducationForm
            formData={formData.education}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <SkillsForm
            formData={formData.skills}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <ExperienceForm
            formData={formData.experience}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <div className="right-section">   
        {renderStep()}
      </div>
    </div>
  );
};




export default CandidateForm;
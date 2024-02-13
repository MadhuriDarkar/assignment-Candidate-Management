import React from 'react';

const ExperienceForm = ({ formData, handleChange, handleSubmit, prevStep }) => {
    const handleInputChange = (index, field, value) => {
        const updatedExperience = [...formData];
        updatedExperience[index][field] = value;
        handleChange('experience', updatedExperience);
    };

    const handleAddExperience = () => {
        if (formData.length < 10) {
            const newExperience = { company: '', project: '', role: '', duration: '' };
            handleChange('experience', [...formData, newExperience]);
        }
    };

    const handleRemoveExperience = (index) => {
        const updatedExperience = [...formData];
        updatedExperience.splice(index, 1);
        handleChange('experience', updatedExperience);
    };
    

    return (
        <div className='expFrom'>
            <h2>Experience Details</h2>
            {formData.map((experience, index) => (
                <div key={index}>
                    <label className='companyLabel'> Company:
                        <input
                            className='companyField'
                            type="text"
                            value={experience.company}
                            onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                            placeholder="Company Name"
                        />
                    </label>
                    <br />
                    <label className='projectLabel'> Project:
                        <input
                            className='projectField'
                            type="text"
                            value={experience.project}
                            onChange={(e) => handleInputChange(index, 'project', e.target.value)}
                            placeholder="Project Name"
                        />
                    </label>
                    <br />
                    <label className='roleLabel'>Role:
                        <input
                            className='roleField'
                            type="text"
                            value={experience.role}
                            onChange={(e) => handleInputChange(index, 'role', e.target.value)}
                            placeholder="Role"
                        />
                    </label>
                    <br />
                    <label className='durationLabel'> Duration (e.g., Jan 2021 - Nov 2021):
                        <input
                            className='durationField'
                            type="text"
                            value={experience.duration}
                            onChange={(e) => handleInputChange(index, 'duration', e.target.value)}
                            placeholder="Duration (e.g., Jan 2021 - Nov 2021)"
                        />
                    </label>
                    <br />
                    {index > 0 && (
                        <button className='removeButton' onClick={() => handleRemoveExperience(index)}>Remove</button>
                    )}
                </div>
            ))}
            {formData.length < 10 && (
                <button className='addButton' onClick={handleAddExperience}>Add Experience</button>
            )}
            <br />
            <button className='prevButton' onClick={prevStep}>Previous</button>
            <button className='nextButton' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ExperienceForm;
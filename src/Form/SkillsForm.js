import React from 'react';

const SkillsForm = ({ formData, handleChange, nextStep, prevStep }) => {
    const handleInputChange = (index, field, value) => {
        const updatedSkills = [...formData];
        updatedSkills[index][field] = value;
        handleChange('skills', updatedSkills);
    };

    const handleAddSkill = () => {
        if (formData.length < 10) {
            const newSkill = { skill: '', experienceInMonths: '' };
            handleChange('skills', [...formData, newSkill]);
        }
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...formData];
        updatedSkills.splice(index, 1);
        handleChange('skills', updatedSkills);
    };

    return (
        <div className='SkillForm'>
            <h2>Skill Details</h2>
            {formData.map((skill, index) => (
                <div key={index}>
                    <label className='skillLabel'>
                        Skills:
                        <input
                            className='skillField'
                            type="text"
                            value={skill.skill}
                            onChange={(e) => handleInputChange(index, 'skill', e.target.value)}
                            placeholder="Skill"
                        />
                    </label>
                    <br />
                    <label className='expLabel'>
                        Experience:
                        <input
                            className='expField'
                            type="number" x
                            value={skill.experienceInMonths}
                            onChange={(e) => handleInputChange(index, 'experienceInMonths', e.target.value)}
                            placeholder="Experience (in months)"
                        />
                    </label>
                    {index > 0 && (
                        <button
                            className='removeButton'
                            onClick={() => handleRemoveSkill(index)}>Remove</button>
                    )}
                </div>
            ))}
            {formData.length < 10 && (
                <button
                    className='addButton'
                    onClick={handleAddSkill}>Add Skill</button>
            )}
            <br />
            <button
                className='prevButton'
                onClick={prevStep}>Previous</button>
            <button
                className='nextButton'
                onClick={nextStep}>Next</button>
        </div>
    );
};

export default SkillsForm;
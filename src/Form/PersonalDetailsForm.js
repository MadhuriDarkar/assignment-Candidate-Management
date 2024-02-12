import React from "react";
import { useState } from "react";


const PersonalDetailsForm = ({ formData, handleChange, nextStep }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange('personalDetails', name, value);
    };

    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (

        <div className="personalDetails">
            <h2>Personal Details</h2>
            <label className="profilePicLabel">Profile Picture:
                <input className="picField" type="file" name="profilePicture" value={formData.profilePicture || ''} onChange={handleInputChange} placeholder="profilePicture" accept='image' /></label>
            <br />
            <label className="nameLabel">Name:
                <input className="nameField" type="text" name="name" value={formData.name || ''} onChange={handleInputChange} placeholder="name" /></label>
            <br /><label>Email:
                <input type="email" name="email" value={formData.email || ''} onChange={handleInputChange} placeholder="Email" /></label>
            <br />
            <label className="genderlabel">
                Gender:
                <input
                    className="genderMaleField"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                />
                Male
            </label>
            <br />
            <label className="femaleLabel">
                <input
                    className="femaleField"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                />
                Female
            </label>
            <br />
            <label className="hobbiesLabel">
                Hobbies:
                <input
                    className="hobbiesField"
                    type="text" name="hobbies"
                    value={formData.hobbies || ''}
                    onChange={handleInputChange}
                    placeholder="hobbies"
                />
            </label>
            <br />
            <button className="nextButton" onClick={nextStep}>Next</button>
        </div>
    );
};
export default PersonalDetailsForm;

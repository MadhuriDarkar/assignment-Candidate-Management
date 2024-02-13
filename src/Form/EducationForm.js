import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState } from "react";
// import { useState } from "react";

const EducationForm = ({ formData, handleChange, nextStep, prevStep }) => {

    const [educationInstitution, setEducationInstitution] = useState("");
    const [ educationGraduation, setEducationGraduation] = useState("");

    
    // const handleInputChange = (index, field, value) => {
    //     console.log(formData, "data of from");
    //     const updatedEducation = [...formData];
    //     console.log(updatedEducation," update Data");
    //     updatedEducation[index][field] = value;
    //     console.log(updatedEducation,"updated DAta");
    //     handleChange('education', updatedEducation);
        
        
    // };
   
    // const handleAddEducation = () => {
    
    //     if (formData.length < 10) {
    //         const newEducation = { institution: '', graduation: '' };
    //         handleChange('education', [...formData, newEducation]);
    //     }
    // };
    const handleAddEducation=(e)=>{
    //    setEducationInstitution(e.target.value);
    //    setEducationGraduation();
  
    let eduObj= {institution:educationInstitution,graduation:educationGraduation}
console.log(eduObj, "educ Obj");
handleChange('education', formData.push(eduObj));
console.log(formData,"ye vala form data h");
    }

    // const handleRemoveEducation = (index) => {
    //     const updatedEducation = [...formData];
    //     updatedEducation.splice(index, 1);
    //     handleChange('education', updatedEducation);
    // };



    // return (
    //     <div className="educationForm">
    //         <h2>Education Details</h2>
    //         {console.log(formData,"data")}
    //         {/* {formData?.map((education, index) => ( */}
    //             <div
    //                 className="fieldDiv"
    //                 key={index}>
    //                 <label className="institutionLabel">
    //                     Institute:
    //                     <input
    //                         className="institutionField"
    //                         type="text"
    //                         name="institution"
    //                         value={education.institution}
    //                         onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
    //                         placeholder="Institution"
    //                     />
    //                 </label>
    //                 <br />
    //                 <label className="graduationLabel">
    //                     Year of Passing:
    //                     <input
    //                         type="text"
    //                         name="graduation"
    //                         value={education.graduation}
    //                         onChange={(e) => handleInputChange(index, 'graduation', e.target.value)}
    //                         placeholder="passing year"
    //                     />
    //                 </label>
    //                 {index > 0 && (
    //                     <button
    //                         className="removeButton"
    //                         onClick={() => handleRemoveEducation(index)}>Remove</button>
    //                 )}
    //             </div>
    //         {/* ))} */}
    //         {formData.length < 10 && (
    //             <button
    //                 className="addButton"
    //                 onClick={handleAddEducation}>Add Education</button>

    //         )}

    //         <br />
    //         <button className="prevButton" onClick={prevStep}>Previous</button>
    //         <button className="nextbutton" onClick={nextStep}>Next</button>
    //     </div>
    // );
     return(
      <div>
         <label className="institutionLabel">
                        Institute:
                         <input
                            className="institutionField"
                            type="text"
                            name="institution"
                            value={educationInstitution}
                            onChange={(e)=>setEducationInstitution(e.target.value)}
                             placeholder="Institution"
                       />
                    </label>
                    <label className="institutionLabel">
                         Graduation:
                         <input
                             className="institutionField"
                             type="text"
                             name="graduation"
                             value={educationGraduation}
                             onChange={(e)=>setEducationGraduation(e.target.value)}
                            placeholder="Graduation"
                         />
                     </label>
                     <button
                     className="addButton"
                     onClick={handleAddEducation}>Add Education</button>
                      <button className="nextbutton" onClick={nextStep}>Next</button>
      </div>
     );

};
export default EducationForm;
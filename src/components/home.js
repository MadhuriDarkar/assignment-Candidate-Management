import React from 'react';
import './home.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [editedCandidate, setEditedCandidate] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        // Function to fetch data of the candidate from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://60d5a2c2943aa60017768b01.mockapi.io/candidate');
                setCandidates(response.data);
                console.log(response, "whole data");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        return () => {
        };
    }, []); // Empty dependency array ensures that the effect runs only once

    const handleCardClick = (id) => {
         console.log('Clicked on candidate with ID:', id);
        const candidate = candidates.find(candidate => candidate.id === id);
        setSelectedCandidate(candidate);
        setEditedCandidate(candidate);
        setEditing(false); //reset the editing mode
    };

    const handleEdit = () => {
        setEditing(true);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCandidate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        axios.put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${editedCandidate.id}`, editedCandidate)
            .then(response => {
                const updatedCandidates = candidates.map(candidate => {
                    if (candidate.id === editedCandidate.id) {
                        return editedCandidate; // Update the candidate in the list with edited details
                    }
                    return candidate;
                });
                setCandidates(updatedCandidates);
                setSelectedCandidate(editedCandidate); // Update selected candidate details
                setEditing(false); // Exit editing mode
            })
            .catch(error => {
                console.error('Error updating candidate:', error);
            });
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this candidate?')) {
            axios.delete(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${selectedCandidate.id}`)
                .then(response => {
                    setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate.id !== selectedCandidate.id));
                    setSelectedCandidate(null);
                    setEditing(false);
                })
                .catch(error => {
                    console.error('Error deleting candidate:', error);
                }
            );
        }
    };
    const renderNestedObjects = (obj) => {
        return (
            <table className='table'>
                <tbody>
                    {Object.entries(obj).map(([key, value]) => (
                        <tr key={key}>
                            <td className='column1'>{key}</td>
                            <td className='column2'>{typeof value === 'object' ? renderNestedObjects(value) : value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
    const handleAddCandidate = () => {
        window.location.href = '/candidate/new';
    }

    return (
        <div className="home-container">

            <div className='sectionHolder'>
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
                    <>
                        <div className='header'>
                            <h2 className='selectedList'> Selected Candidate Details</h2>
                            <div className='btn'>
                                <button className='editButton' onClick={handleEdit}>Edit</button>
                                <button className='deleteButton' onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                        <div className='selectedData'>
                            {selectedCandidate && (
                                <div>
                                    {editing ? (
                                        <div>
                                            <input type="text" name="name" value={editedCandidate.name} onChange={handleInputChange} />
                                            <button onClick={handleSave}>Save</button>
                                        </div>
                                    ) : (
                                        <div>
                                            {renderNestedObjects(selectedCandidate)}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Home;
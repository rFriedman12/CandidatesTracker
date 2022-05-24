import React, { useState } from 'react';
import axios from 'axios';
import { useCandidates } from '../CandidatesContext';

function AddCandidate() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: ''
    });

    const { updateCandidates } = useCandidates();

    function onFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function onSubmitClick() {
        const candidate = { ...formData, status: 'pending' };
        await axios.post('/api/candidates/add', candidate);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            notes: ''
        });
        updateCandidates();
    }

    const { firstName, lastName, email, phoneNumber, notes } = formData;

    return (
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>Add Candidate</h4>
                        <input
                            className='form-control'
                            name='firstName'
                            placeholder='First Name'
                            onChange={onFormChange}
                            value={firstName} />
                        <br />
                        <input
                            className='form-control'
                            name='lastName'
                            placeholder='Last Name'
                            onChange={onFormChange}
                            value={lastName} />
                        <br />
                        <input
                            className='form-control'
                            name='email'
                            placeholder='Email Address'
                            onChange={onFormChange}
                            value={email} />
                        <br />
                        <input
                            className='form-control'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            onChange={onFormChange}
                            value={phoneNumber} />
                        <br />
                        <textarea
                            className='form-control'
                            name='notes' rows='5'
                            onChange={onFormChange}
                            value={notes}></textarea>
                        <br />
                        <button className='btn btn-primary' onClick={onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCandidate;
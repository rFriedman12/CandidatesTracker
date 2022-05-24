import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCandidates } from '../CandidatesContext';

function ViewCandidateDetails() {

    const { id } = useParams();
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        status: '',
        notes: ''
    });
    const { updateCandidates } = useCandidates();

    useEffect(() => {
        async function getCandidate() {
            const { data } = await axios.get(`api/candidates/getcandidate?id=${id}`);
            setCandidate(data);
        }

        getCandidate();
    }, []);

    async function onConfirmOrDeclineClick(status) {
        const updatedCandidate = { ...candidate, id, status };
        await axios.post('/api/candidates/update', updatedCandidate);
        setCandidate({ ...candidate, status });
        updateCandidates();
    }

    const { firstName, lastName, phoneNumber, email, status, notes } = candidate;

    return <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card card-body bg-light'>
                    <h4>Name: {firstName} {lastName}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Phone Number: {phoneNumber}</h4>
                    <h4>Status: {status}</h4>
                    <h4>Notes:</h4>
                    <p>{notes}</p>
                    {status === 'Pending' && <div>
                        <button className='btn btn-primary' onClick={() => onConfirmOrDeclineClick('Confirmed')}>Confirm</button>
                        <button className='btn btn-danger' onClick={() => onConfirmOrDeclineClick('Declined')}>Decline</button>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}

export default ViewCandidateDetails;
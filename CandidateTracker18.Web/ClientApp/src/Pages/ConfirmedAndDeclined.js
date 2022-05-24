import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCandidates } from '../CandidatesContext';
import CandidateRow from '../Components/CandidateRow';

function ConfirmedAndDeclined() {

    const { status } = useParams();
    const { confirmedCandidates, declinedCandidates } = useCandidates();
    const candidates = getCandidates();
    const [showNotes, setShowNotes] = useState(true);

    function getCandidates() {
        if (status === 'confirmed') {
            return confirmedCandidates;
        }
        else if (status === 'declined') {
            return declinedCandidates;
        }
        return [];
    }

    return (
        <div className='container'>
            <button className='btn btn-success' onClick={() => setShowNotes(!showNotes)}>Toggle Notes</button>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        {showNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                        return <CandidateRow candidate={c} showNotes={showNotes} key={c.id} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ConfirmedAndDeclined;
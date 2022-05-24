import React from 'react';
import { useCandidates } from '../CandidatesContext';
import PendingCandidate from '../Components/PendingCandidateRow';

function Pending() {

    const { pendingCandidates } = useCandidates();

    return (
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {pendingCandidates.map(c => {
                    return <PendingCandidate key={c.id} candidate={c}></PendingCandidate>
                })}
            </tbody>
        </table>
    )
}

export default Pending;
import React from 'react';
import {Link} from 'react-router-dom';

function PendingCandidate({ candidate }) {

    const { firstName, lastName, phoneNumber, email, id } = candidate;

    return (
        <tr>
            <td>
                <Link to={`/viewdetails/${id}`}>View Details</Link>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
        </tr>
    )
}

export default PendingCandidate;
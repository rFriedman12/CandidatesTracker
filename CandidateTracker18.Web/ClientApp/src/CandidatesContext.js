import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';

const CandidatesContext = createContext();

function CandidatesContextComponent({ children }) {

    const [candidates, setCandidates] = useState([]);

    async function updateCandidates() {
        const { data } = await axios.get('/api/candidates/getall');
        setCandidates(data);
    }

    useEffect(() => {
        updateCandidates();
    }, []);

    return (
        <CandidatesContext.Provider value={{
            candidates,
            pendingCandidates: candidates.filter(c => c.status === 'Pending'),
            confirmedCandidates: candidates.filter(c => c.status === 'Confirmed'),
            declinedCandidates: candidates.filter(c => c.status === 'Declined'),
            updateCandidates
        }}>
            {children}
        </CandidatesContext.Provider>
    )
}

function useCandidates() {
    return useContext(CandidatesContext);
}

export { CandidatesContextComponent, useCandidates };
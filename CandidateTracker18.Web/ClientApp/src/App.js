import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import AddCandidate from './Pages/AddCandidate';
import { CandidatesContextComponent } from './CandidatesContext';
import Pending from './Pages/Pending';
import ViewCandidateDetails from './Pages/ViewCandidateDetails';
import ConfirmedAndDeclined from './Pages/ConfirmedAndDeclined';

function App() {
    return (
        <CandidatesContextComponent>
            <Layout>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/addcandidate' component={AddCandidate} />
                <Route exact path='/pending' component={Pending} />
                <Route exact path='/viewdetails/:id' component={ViewCandidateDetails} />
                <Route exact path='/viewcandidates/:status' component={ConfirmedAndDeclined} />
            </Layout>
        </CandidatesContextComponent>
    )
}

export default App;
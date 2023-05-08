import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditons = () => {
    return (
        <div>
            <h3>Here is our terms and conditons</h3>
            <p>Go back to Registration: <Link to='/resister'></Link></p>
        </div>
    );
};

export default TermsAndConditons;
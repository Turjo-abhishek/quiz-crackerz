import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const Error = () => {
    return (
        <div className="h-100 container">
            <FaceFrownIcon height={100} width={100}></FaceFrownIcon>
            <h1 className="fs-10 fw-bold">This route is not available</h1>
            <h1 className="fs-10 fw-bold">Search for the genuine path!!</h1>
        </div>
    );
};

export default Error;
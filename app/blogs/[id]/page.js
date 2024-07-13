import React from 'react';

const page = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <h3>Dynamic page is here {id} </h3>
        </div>
    );
};

export default page;
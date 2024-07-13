import { notFound } from 'next/navigation';
import React from 'react';

const page = ({ params }) => {
    const { id } = params;
    if (id === '3') {
        notFound()
    }
    return (
        <div>
            <h3>Dynamic page is here {id} </h3>
        </div>
    );
};

export default page;
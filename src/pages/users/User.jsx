import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';


const User = () => {

    const params = useParams();
    const user = useLoaderData();

    return (
        <div>
            <h1>User {params.id}</h1>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
        </div>
    );
}

export default User;

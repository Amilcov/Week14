import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

function Profile() {
    const params = useParams();
    const { userId } = params;
    if(userId === "0") return <Redirect to="/"/>
    return (
        <h1> Hello from Profile {userId} !</h1>
    )


}

export default Profile;
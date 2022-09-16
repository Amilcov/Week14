import React from 'react';
import {Link, Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

function Profile() {
    const { userId } = useParams();
    const { url } = useRouteMatch();
    
    if(userId === "0") return <Redirect to="/"/>
    return (
        <div>
          <h1> Hello from Profile {userId} !</h1>
          <Link to={`${url}/posts`}> User's Posts </Link>
          <Link to={`${url}/photos`}> User's Phots </Link>
          <Link to={`${url}/about`}> About User </Link>

        <Switch>
               <Route path={`${url}/about`}>
               <h1>About for User {userId} </h1>
            </Route>

            <Route path={`${url}/posts`}>
               <h1>Posts for User {userId} </h1>
            </Route>

            <Route path={`${url}/photos`}>
               <h1>Photos for User {userId} </h1>
            </Route>
            
        </Switch>
        </div>

    )


}

export default Profile;
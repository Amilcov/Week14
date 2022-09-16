import React from 'react';
import {Link, NavLink, Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

function Profile() {
    const params = useParams();
    const { userId } = params;
    const match = useRouteMatch();
    
    if(userId === "0") return <Redirect to="/"/>
    return (
        <div>
          <h1> Hello from Profile {userId} !</h1>
          <Link to={`${match.url}/posts`}> User's Posts </Link>
          <Link to={`${match.url}/photos`}> User's Phots </Link>
          <Link to={`${match.url}/about`}> About User </Link>

          <Switch>

            <Route to={`${match.url}/posts`}>
               <h1>Posts for User {userId} </h1>
            </Route>

            <Route to={`${match.url}/photos`}>
               <h1>Photos for User {userId} </h1>
            </Route>
            
            <Route to={`${match.url}/abot`}>
               <h1>About for User {userId} </h1>
            </Route>

          </Switch>
        </div>

    )


}

export default Profile;
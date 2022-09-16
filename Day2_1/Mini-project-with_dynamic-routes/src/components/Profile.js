import React from 'react';
import { NavLink, Redirect, Route, Switch ,useParams } from 'react-router-dom';

function Profile() {
    const params = useParams();
    const { userId } = params;
    if(userId === "0") return <Redirect to="/"/>
    return (
        <div>
          <h1> Hello from Profile {userId} !</h1>
          <NavLink to={`/users/${userId}/posts`}> User's Posts </NavLink>
          <NavLink to={`/users/${userId}/photos`}> User's Phots </NavLink>
          <NavLink to={`/users/${userId}/about`}> About User </NavLink>

          <Switch>

            <Route path="/users/:userId/posts">
               <h1>Posts for User {userId} </h1>
            </Route>

            <Route path="/users/:userId/photos">
               <h1>Photos for User {userId} </h1>
            </Route>
            


          </Switch>
        </div>

    )


}

export default Profile;

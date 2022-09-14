import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';

const Root = () => {
  const handleClick = () => console.log('Tks for clicking');
   return (
    <div>
        <BrowserRouter>
          <div>
            <NavLink exact activeClassName="red" to="/" > App </NavLink>
            <NavLink exact activeClassName="blue" to="/users"> Users </NavLink>
            <NavLink activeClassName="green" to="/users/1"> User's Profile </NavLink>
            <NavLink exact to="/" onClick={handleClick} activeStyle={{fontweight: "bold"}}> App with click handler </NavLink>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>

            <Route path="/users/:userId">
              <Profile />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

   

            <Route>
              <h1>404: Page not found</h1>
            </Route>
          </Switch>
        
          </div>  
        </BrowserRouter>
    </div>
   )
};


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
